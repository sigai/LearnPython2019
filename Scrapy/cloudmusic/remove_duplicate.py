#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from collections import Counter
from pymongo import MongoClient
from bson.objectid import ObjectId
from redis import StrictRedis, ConnectionPool

client = MongoClient("localhost", 27017)
db = client["netease"]
coll = db["user"]

pool = ConnectionPool.from_url('redis://@192.168.28.110:6379/0')
red = StrictRedis(connection_pool=pool)

users = coll.find({})
red.set("duplicate", 0)

count = 0

# for user in users:
#     user_id = user['userId']
#     try:
#         res = red.getbit("duplicate", int(user_id))
#     except Exception as e:
#         red.sadd("error", user_id)
#         print("[-] ERROR %s"%user_id)
#         continue
#     if res:
#         coll.remove({"_id": user["_id"]})
#     else:
#         red.setbit("duplicate", int(user_id), 1)
#     count += 1
#     if count % 10000 == 0:
#         print(count)



    # cur = coll.find({"userId":user_id})
    # for u in cur:
    #     coll.remove({"_id":u["_id"]})
    #     break
