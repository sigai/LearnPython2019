# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import json
from scrapy.exceptions import DropItem

class JianshuPipeline(object):
    def process_item(self, item, spider):
        return item


class JsonWriterPipeline(object):

    def open_spider(self, spider):
        self.file = open('items.jl', 'w', encoding='utf-8')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        line = json.dumps(dict(item), ensure_ascii=False) + "\n"
        self.file.write(line)
        return item


class DuplicatesPipeline(object):

    def __init__(self):
        self.user_seen = set()

    def process_item(self, item, spider):
        if item['user_code'] in self.user_seen:
            raise DropItem("Duplicate item found: %s" % item)
        else:
            self.user_seen.add(item['user_code'])
            return item