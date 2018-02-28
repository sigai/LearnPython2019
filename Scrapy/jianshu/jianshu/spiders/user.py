# -*- coding: utf-8 -*-

import scrapy
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst

from jianshu.items import JianshuItem


class UserLoader(ItemLoader):
    
    default_output_processor = TakeFirst()


class UserSpider(scrapy.Spider):
    name = 'user'
    allowed_domains = ['jianshu.com']

    types = ['following', 'followers']
    
    def start_requests(self):
        first_user = "yZq3ZV"
        for t in self.types:
            url = 'https://www.jianshu.com/users/{u}/{t}'.format(u=first_user, t=t)
            yield scrapy.Request(url, callback=self.parse)
    


    def parse(self, response):
        user_list = response.css('#list-container').xpath('.//li')

        for user in user_list:
            item = self.load_item(selector=user)
            yield item
            
            u = item['user_code'].split('/')[-1]

            for t in self.types:
                pages = int(item[t]) // 9
                self.log()

                for p in range(2, pages+3):
                    
                    url = 'https://www.jianshu.com/users/{u}/{t}?page={p}'.format(u=u, t=t, p=p)
                    yield scrapy.Request(url, callback=self.parse)


    def load_item(self, **kwargs):
        l = UserLoader(item=JianshuItem(), **kwargs)
        l.add_xpath('user_code', './/a[@class="name"]/@href')
        l.add_xpath('user_name', './/a[@class="name"]/text()')
        l.add_xpath('following', './/div[@class="meta"]/span[1]/text()', re=r'(\d+)')
        l.add_xpath('followers', './/div[@class="meta"]/span[2]/text()', re=r'(\d+)')
        l.add_xpath('articles', './/div[@class="meta"]/span[3]/text()', re=r'(\d+)')
        l.add_xpath('words', './/div[@class="meta"][2]/text()', re=r'写了 (\d+) 字')
        l.add_xpath('likes', './/div[@class="meta"][2]/text()', re=r'获得了 (\d+) 个喜欢')
        item = l.load_item()
        return item
