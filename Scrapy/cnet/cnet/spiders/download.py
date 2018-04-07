# -*- coding: utf-8 -*-
import scrapy
from cnet.items import SoftwareItem, SoftwareItemLoader
from scrapy.loader.processors import MapCompose, TakeFirst, Join
import re

class DownloadSpider(scrapy.Spider):
    name = 'download'
    allowed_domains = ['download.cnet.com']
    proxy = "http://127.0.0.1:1087"
    urls = []

    def start_requests(self):
        with open('links.txt', mode='r', encoding='utf-8') as f:
            for line in f:
                self.urls.append(line.strip())
        for url in self.urls[:10]:
            yield scrapy.Request(url=url, meta={'proxy': self.proxy})

    def parse(self, response):
        l = SoftwareItemLoader(item=SoftwareItem(), response=response)
        l.add_xpath("name", "//span[@itemprop='name' and contains(@class,'title')]/text()")
        l.add_xpath("description", "//*[@id='publisher-description']//text()", Join(), str.strip)
        l.add_xpath("publisher", "//*[@id='specsPubName']/td[2]//text()", MapCompose(str.strip))
        l.add_xpath("count", "//*[@id='specsTotalDownload']/td[2]/text()", MapCompose(str.strip, lambda x:x.replace(",",""), int))
        l.add_xpath("filename", "//*[@id='specsFileName']/td[2]/text()", MapCompose(str.strip))
        l.add_xpath("category", "//*[contains(@class, 'specsCategory')]/td/a/text()", MapCompose(str.strip))
        l.add_xpath("subcategory", "//*[contains(@class, 'specsSubcategory')]/td/a/text()", MapCompose(str.strip))
        l.add_xpath("os", "//*[@id='specsOperatingSystem']/td[2]/text()", MapCompose(str.strip))
        l.add_xpath("id", "//script[contains(text(), 'var omdata')]/text()", MapCompose(str.strip), re='softwareProductId:"(\d+)",')


        yield l.load_item()

