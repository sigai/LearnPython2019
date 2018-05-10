#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from collections import Counter
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient("localhost", 27017)
db = client["netease"]
coll = db["user"]

users = coll.find({})

users_list = []
for user in users:
    user_id = user['userId']
    users_list.append(user_id)


c = Counter(users_list)
dup = []
for user_id in c:
    if c[user_id] > 1:
        dup.append(user_id)

for user_id in dup:
    cur = coll.find({"userId":user_id})
    for u in cur:
        coll.remove({"_id":u["_id"]})
        break
