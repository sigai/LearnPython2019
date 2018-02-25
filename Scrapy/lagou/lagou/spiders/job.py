# -*- coding: utf-8 -*-
import scrapy
import json
from scrapy_splash import SplashRequest


class JobSpider(scrapy.Spider):
    name = 'job'
    allowed_domains = ['m.lagou.com']
    
    def start_requests(self):
        url = "https://m.lagou.com/search.json?city=%E5%8C%97%E4%BA%AC&positionName=%E7%88%AC%E8%99%AB%E5%B7%A5%E7%A8%8B%E5%B8%88&pageNo={pn}&pageSize=15"
        for i in range(1, 14):
            yield scrapy.Request(url.format(pn=str(i)), callback=self.parse_pid)
            break


    def parse_pid(self, response):
        url = 'https://m.lagou.com/jobs/{pid}.html'
        data = json.loads(str(response.body, encoding='utf-8'))
        job_list = data['content']['data']['page']['result']
        for job in job_list:
            pid = job['positionId']
            yield SplashRequest(url.format(pid=pid), callback=self.parse, args={'wait': 0.5,},
                                endpoint='render.html')
            break


    def parse(self, response):
        print(response.body)

class MySpider(scrapy.Spider):
    name = 'test'
    start_urls = ["https://www.lagou.com/jobs/list_%E7%88%AC%E8%99%AB%E5%B7%A5%E7%A8%8B%E5%B8%88"]

    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, self.parse, args={'wait': 1.5})

    def parse(self, response):
        # response.body is a result of render.html call; it
        # contains HTML processed by a browser.
        # ...   
        with open('job.html', 'wb') as f:
            f.write(response.body)     