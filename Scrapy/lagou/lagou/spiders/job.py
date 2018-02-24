# -*- coding: utf-8 -*-
import scrapy
import json

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
            yield scrapy.Request(url.format(pid=pid), callback=self.parse)


    def parse(self, response):
        print(response.body)
