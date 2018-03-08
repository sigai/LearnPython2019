# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class TranslateItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    agt_id = scrapy.Field()

    type_id = scrapy.Field()
    sentence_id= scrapy.Field()

    sentence = scrapy.Field()


