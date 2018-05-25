# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class UserItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    py = scrapy.Field()
    time = scrapy.Field()
    followed = scrapy.Field()
    userId = scrapy.Field()
    vipType = scrapy.Field()
    gender = scrapy.Field()
    accountStatus = scrapy.Field()
    nickname = scrapy.Field()
    remarkName = scrapy.Field()
    follows = scrapy.Field()
    mutual = scrapy.Field()
    avatarUrl = scrapy.Field()
    userType = scrapy.Field()
    expertTags = scrapy.Field()
    authStatus = scrapy.Field()
    experts = scrapy.Field()
    followeds = scrapy.Field()
    signature = scrapy.Field()
    eventCount = scrapy.Field()
    playlistCount = scrapy.Field()
    vipRights = scrapy.Field()
