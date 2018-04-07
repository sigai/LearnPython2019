# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Jb51NetItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()

    bid = scrapy.Field()
    book = scrapy.Field()

    url = scrapy.Field()
