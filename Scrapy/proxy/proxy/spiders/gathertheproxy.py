# -*- coding: utf-8 -*-
import time
import re
import scrapy
import json
from proxy.items import ProxyItem
from redis import StrictRedis, ConnectionPool


class ProxySpider(scrapy.Spider):
    name = 'proxy'
    allowed_domains = ['music.163.com', 'gatherproxy.com']
    pool = ConnectionPool.from_url('redis://@192.168.28.110:6379/0')
    red = StrictRedis(connection_pool=pool)
    proxy = "http://127.0.0.1:1087"
    url = "http://www.gatherproxy.com/proxylist/country/?c=United%20States"
    p = re.compile(r'"PROXY_IP":"(?P<ip>.*?)".*"PROXY_PORT":"(?P<port>.*?)"')
    items = []

    def start_requests(self):
        request = scrapy.Request(url=self.url, meta={'proxy':self.proxy}, callback=self.get_proxy, dont_filter=True)
        yield request

    def get_proxy(self, response):
        url = "http://music.163.com/api/user/getfollows/271334662?offset=0&limit=20&order=true"
        # url = "http://music.163.com/api/user/getfolloweds?userId=1&offset=20&limit=20&order=true"
        g = self.p.findall(response.text)
        for ip, port in g:
            port = str(int(port, base=16))
            proxy = "http://%s:%s\n" % (ip, port)
            start = time.time()
            request = scrapy.Request(url, meta={'proxy': proxy, 'ip': ip, 'port': port, 'download_timeout': 5, "start":start}, dont_filter=True)
            yield request

    def parse(self, response):
        res = response.body_as_unicode()
        if res:
            ip = response.meta['ip']
            port = response.meta['port']
            start = response.meta['start']
            delay = time.time() - start
            try:
                r = json.loads(res)
            except Exception as e:
                self.logger.info("bad proxy")
            else:
                if r['code'] == 200:
                    item = ProxyItem()
                    item['ip'] = ip
                    item['port'] = port
                    item['delay'] = delay
                    yield item
