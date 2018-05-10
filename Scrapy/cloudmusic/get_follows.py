#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import requests
from datetime import datetime
from pymongo import MongoClient
from redis import StrictRedis, ConnectionPool

with open("proxies.txt", mode='r', encoding='utf-8') as f:
    proxies = []
    for line in f:
        proxies.append(line.strip())
    proxy = {"http":"http://" + proxies[0]}
with open("proxies.txt", mode='w', encoding='utf-8') as f:
    f.write("\n".join(proxies[1:]) +"\n")

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[31m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


prompt = "["+ bcolors.OKBLUE + '+' + bcolors.ENDC + '] '

HEADERS = {
    'Accept': '*/*',
    'DontTrackMeHere': 'gzip,deflate,sdch',
    'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Host': 'music.163.com',
    'Referer': 'http://music.163.com/search/',
    "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3409.2 Safari/537.36",

}
client = MongoClient("localhost", 27017)
db = client["netease"]
coll = db["user"]
pool = ConnectionPool.from_url('redis://@localhost:6379/0')
red = StrictRedis(connection_pool=pool)


def get_follows_by_id(user_id):
    url = "http://music.163.com/api/user/getfollows/{userId}?offset={offset}&limit=300&order=true"
    offset = 0
    while True:
        u = url.format(userId=user_id, offset=offset)
        try:
            res = requests.get(u, headers=HEADERS, proxies=proxy, timeout=10)
        except Exception as e:
            red.lpush("queue", user_id)
            print("[*] Bad proxy")
            break
        try:
            response = res.json()
        except Exception as e:
            red.lpush("queue", user_id)
            print("[*] Bad response")
            break
        if response['code'] == -460:
            red.lpush("queue", user_id)
            print("[*] Blocked")
            return "blocked"
        items = response['follow']
        for item in items:
            uid = item["userId"]
            if not red.sismember("users", uid):
                r = coll.insert(item)
                if not r:
                    print(prompt, "exists", uid, r)
                    continue
                else:
                    red.rpush("queue", uid)
                    red.sadd("users", uid)
        if response["more"]:
            offset += 300
        else:
            break

for _ in range(100000):
    user_id = red.lpop("queue")
    user_id = str(user_id, encoding='utf-8')
    print(prompt + "[%s] > "%datetime.now().strftime("%H:%M:%S"), user_id)
    if red.sismember("scraped", user_id):
        continue
    res = get_follows_by_id(user_id)
    if res == "blocked":
        break
    red.sadd("scraped", user_id)


# get seed user by my own id
# get_follows_by_id("44954000")
