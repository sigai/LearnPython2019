# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
from pymongo import MongoClient

class Jb51NetPipeline(object):

    def open_spider(self, spider):
        self.mongodb = MongoClient("mongodb://localhost:27017/")
        self.db = self.mongodb['jb51net']
        self.table = self.db['books']

    def process_item(self, item, spider):
        doc = self.table.find_one({"bid": item['bid']})
        if not doc:
            self.table.update_one({"bid": item['bid']}, {"$set": dict(item)}, upsert=True)
        else:
            print(item['bid'] + " exists")
        return item
