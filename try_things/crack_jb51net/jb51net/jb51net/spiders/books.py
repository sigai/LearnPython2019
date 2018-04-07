# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

from jb51net.items import Jb51NetItem

class BooksSpider(CrawlSpider):
    name = 'books'
    allowed_domains = ['jb51.net']
    start_urls = ['http://www.jb51.net/books/',]

    rules = (
        Rule(LinkExtractor(allow=r'books/\d+.html'), callback='parse_item', follow=True),
        Rule(LinkExtractor(allow=r'books/list\d+_\d+.html'), follow=True),
    )

    def parse_item(self, response):
        i = Jb51NetItem()
        i['url'] = response.xpath('//a[contains(text(), "百度网盘下载")]/@href').extract_first()
        i['book'] = response.xpath('//*[@itemprop="name"]/text()').extract_first()
        i['bid'] = response.url.split("/")[-1][:-5]

        #i['domain_id'] = response.xpath('//input[@id="sid"]/@value').extract()
        #i['name'] = response.xpath('//div[@id="name"]').extract()
        #i['description'] = response.xpath('//div[@id="description"]').extract()
        yield i
