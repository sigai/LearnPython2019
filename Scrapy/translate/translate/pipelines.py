# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import json
from redis import StrictRedis


class TranslatePipeline(object):
    def open_spider(self, spider):
        """
        load data and format to linked-list then save to redis
        :param spider:
        :return:
        """
        self.redis = StrictRedis.from_url('redis://@192.168.28.106:6379/0')

    def process_item(self, item, spider):
        """
        save trans sents to redis and mark a flag
        :param item:
        :param spider:
        :return:
        """
        agt_id = item['agt_id']
        type_id = item['type_id']
        sentence_id = item['sentence_id']
        sentence = item['sentence']

        sent = (agt_id, type_id, sentence_id, sentence)
        self.redis.sadd("trans", json.dumps(sent, ensure_ascii=False, indent=4))
        return item

    def close_spider(self, spider):
        """
        merge sents back to article and save to database
        :param spider:
        :return:
        """

