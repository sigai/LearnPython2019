# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst, Join, MapCompose


class SoftwareItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    id = scrapy.Field()
    name = scrapy.Field()
    description = scrapy.Field()
    publisher = scrapy.Field()
    site = scrapy.Field()
    release = scrapy.Field()
    version = scrapy.Field()
    count = scrapy.Field()
    filename = scrapy.Field()
    size = scrapy.Field()
    category = scrapy.Field()
    subcategory = scrapy.Field()
    os = scrapy.Field()
    price = scrapy.Field()



class SoftwareItemLoader(ItemLoader):
    default_output_processor = TakeFirst()

