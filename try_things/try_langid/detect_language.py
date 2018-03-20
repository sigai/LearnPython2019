#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import langid
import json
import pymongo
import redis

# 从redis取值
# r = redis.StrictRedis(host='192.168.28.106', port=6379, decode_responses=True, db=1)
# res = r.smembers('items')


# 从mongo取值
from pymongo import MongoClient
conn = MongoClient('192.168.28.106',27017)
db = conn.answers
res = db.question.find({"question_link":{'$regex':"^https://answers.microsoft.com/en-us/"}})



for item in res:
    # print(type(item))
    # item = json.loads(item)
    content = item['question_content']
    link = item['question_link']
    replies = item['reply']
    link_lang = link.split('/')[3].split('-')[0]
    lang = langid.classify(content.lower())

    if lang[0] != link_lang:
        print(link_lang, lang, link)