# -*- coding: utf-8 -*-
import scrapy


class PicSpider(scrapy.Spider):
    name = 'pic'
    allowed_domains = ['jandan.net']
    start_urls = ['http://jandan.net/']

    def parse(self, response):
        pass
