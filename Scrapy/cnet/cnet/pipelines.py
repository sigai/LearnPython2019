# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo
from bson.objectid import ObjectId
import json

class CnetPipeline(object):

    def open_spider(self, spider):
        self.CLIENT = pymongo.MongoClient(host="192.168.28.106", port=27017)
        self.DB = self.CLIENT['download_cnet_com']
        self.software = self.DB['software']

    def process_item(self, item, spider):
        self.software.update({"id":item['id']}, {"$set":dict(item)},upsert=True)
        return item
