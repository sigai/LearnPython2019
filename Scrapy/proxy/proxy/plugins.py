#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import logging
import scrapy
from scrapy import signals
from scrapy.exceptions import DontCloseSpider
import time
from time import sleep
import requests
import prettytable
from threading import Thread

logger = logging.getLogger(__name__)

class wait(object):
    """
    classmethord -> init -> spider_opened -> item_scraped -> spider_close
    """
    def __init__(self, crawler):
        self.crawler = crawler

    @classmethod
    def from_crawler(cls, crawler):
        ext = cls(crawler)
        crawler.signals.connect(ext.spider_idle, signal=signals.spider_idle)
        return ext

    def spider_idle(self, spider):
        logger.info(">start proxy check<")
        tasks=[]
        for item in spider.items:
            t = Thread(target=check, args=(item, spider))
            tasks.append(t)

        for t in tasks:
            t.start()
        for t in tasks:
            t.join()

        spider.items = []
        logger.info(">start watting for 5 min<")
        sleep(5 * 60)

        request = scrapy.Request(url=spider.url, meta={'proxy': spider.proxy}, callback=spider.get_proxy, dont_filter=True)
        self.crawler.engine.crawl(request, spider=spider)
        raise DontCloseSpider()

def check(item, spider):
    proxy = "http://%s:%s"%(item['ip'], item['port'])
    for i in range(10):
        res = check_proxy(proxy)
        delay = int(res * 100)
        if 100 > delay > 0:
            continue
        else:
            spider.red.srem("proxies", "%s:%s"%(item['ip'], item['port']))


def check_proxy(proxy):
    url = "http://music.163.com/api/user/getfollows/271334662?offset=0&limit=20&order=true"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3409.2 Safari/537.36"}
    try:
        start = time.time()
        res = requests.get(url, headers=headers, proxies={"http":proxy}, timeout=2)
        cost = time.time() - start
    except Exception as e:
        return False
    try:
        r = res.json()
    except Exception as e:
        return False
    if r['code'] == 200:
        return cost
    else:
        return False



