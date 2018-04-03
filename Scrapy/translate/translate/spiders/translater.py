# -*- coding: utf-8 -*-
import json
from urllib.parse import parse_qs

import scrapy
from scrapy import Request
from redis import StrictRedis

from translate.items import TranslateItem


class TransSpider(scrapy.Spider):

    name = 'trans'
    allowed_domains = ['translate.google.com']

    def start_requests(self):

        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={lang}&dt=t&q={s}"
        redis = StrictRedis.from_url('redis://@192.168.28.106:6379/0')
        i = 0
        while True:
            sent = redis.spop('sents')
            if sent:
                i += 1
                sent = json.loads(sent)
                sent = tuple(sent)
                hash_id, j, i, s = sent
                yield Request(url.format(lang='fr', s=s), meta={'j':j,'i':i, 'hash_id':hash_id}, dont_filter=True)
            else:
                self.log("Waiting for Tasks...")
                print(dir(self))
                break

    def parse(self, response):

        res = json.loads(response.text)

        item = TranslateItem()
        item['agt_id'] = response.meta['hash_id']
        item['type_id'] = response.meta['j']
        item['sentence_id'] = response.meta['i']
        item['sentence'] = res[0][0][0]

        yield item
