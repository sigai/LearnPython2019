# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy import Field
from scrapy.contrib.loader.processor import Join, MapCompose, TakeFirst


class JianshuItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    user_code = Field(input_processor=MapCompose(lambda x: x.split('/')[-1]))
    user_name = Field()
    following = Field()
    followers = Field()
    articles = Field()
    words = Field()
    likes = Field()
