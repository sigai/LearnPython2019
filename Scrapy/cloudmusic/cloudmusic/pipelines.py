# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class CloudmusicPipeline(object):
    def process_item(self, item, spider):
        spider.coll.insert(dict(item))
        user_id = item['userId']
        spider.red.sadd("users", user_id)
        return item
