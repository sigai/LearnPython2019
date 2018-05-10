# -*- coding: utf-8 -*-
import json

import scrapy
from cloudmusic.items import UserItem

from pymongo import MongoClient
from redis import StrictRedis, ConnectionPool


class UserSpider(scrapy.Spider):
    name = 'user'
    allowed_domains = ['music.163.com']
    client = MongoClient("localhost", 27017)
    db = client["netease"]
    coll = db["user"]
    pool = ConnectionPool.from_url('redis://@192.168.28.110:6379/0')
    red = StrictRedis(connection_pool=pool)
    proxy = "http://" + str(red.srandmember("proxies"), encoding='utf-8').strip()

    def start_requests(self):
        for i in range(100000):
            user_id = str(self.red.lpop("queue"), encoding='utf-8')

            url = "http://music.163.com/api/user/getfollows/{userId}?offset={offset}&limit=300&order=true"
            # url = "http://music.163.com/api/user/getfolloweds?userId={userId}?offset={offset}&limit=300&order=true"
            offset = 0

            u = url.format(userId=user_id, offset=offset)
            if not self.red.sismember("scraped", user_id):
                yield scrapy.Request(u,
                                     meta={"offset": offset, "user_id": user_id,
                                           "proxy": self.proxy, "download_timeout": 20},
                                     dont_filter=True)

    def parse(self, response):
        url = response.url
        user_id = response.meta['user_id']
        offset = response.meta["offset"]
        res = json.loads(response.body_as_unicode())
        items = res['follow']
        for item in items:
            uid = item["userId"]
            if not self.red.sismember("users", uid):
                yield UserItem(item)

        if res["more"]:
            old = "offset={offset}".format(offset=offset)
            offset += 300
            yield scrapy.Request(url.replace(old, "offset={offset}".format(offset=offset)),
                                 meta={"offset": offset, "user_id": user_id,
                                       "proxy":self.proxy, "download_timeout": 20},
                                 dont_filter=True)
        else:
            self.red.sadd("scraped", user_id)

