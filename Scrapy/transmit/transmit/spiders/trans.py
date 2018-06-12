# -*- coding: utf-8 -*-
import scrapy


class TransSpider(scrapy.Spider):
    name = 'trans'
    allowed_domains = ['freeerror.com']
    start_urls = ['http://freeerror.com/']

    def parse(self, response):
        pass
