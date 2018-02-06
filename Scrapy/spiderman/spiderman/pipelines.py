# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
from urllib.request import urlretrieve

class SpidermanPipeline(object):
    def process_item(self, item, spider):
        abs_addr = "http://www.xiaohuar.com" + item["pic"]
        filename = "./pic/%s"%item["pic"].split("/")[-1]
        print(abs_addr, filename)
        urlretrieve(abs_addr, filename=filename)
        return item
