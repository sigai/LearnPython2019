# -*- coding: utf-8 -*-
import scrapy


class ShortvideoSpider(scrapy.Spider):
    name = 'shortvideo'
    allowed_domains = ['youtube.com']
    start_urls = [f'https://www.youtube.com/results?sp=CAESBBABGAE%253D&search_query=Aerial+photography&page={i}' for i in range(1, 31)]

    def parse(self, response):
        pass
