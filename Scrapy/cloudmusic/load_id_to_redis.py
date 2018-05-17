#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from pymongo import MongoClient
from redis import StrictRedis, ConnectionPool


client = MongoClient("localhost", 27017)
db = client["netease"]
coll = db["user"]
pool = ConnectionPool.from_url('redis://@localhost:6379/0')
red = StrictRedis(connection_pool=pool)

users = coll.find({})

# seen = set()
# for user in users:
#     user_id = user['userId']
#     seen.add(user_id)
#
# print(len(seen))

# for user_id in seen:
#     red.sadd("users", user_id)

# load user_id
# queue = red.smembers("users")
#
# for user_id in queue:
#     red.rpush("queue", user_id)

# load proxy
# with open("proxies.txt", mode='r', encoding='utf-8') as f:
#     for each in f:
#         proxy = each.strip()
#         red.rpush("proxies", proxy)

# follows
for user in users:
    follows = user['follows']
    user_id = user['userId']
    if follows > 15 and not red.sismember("scraped", user_id):
        red.lpush("queue", user_id)
        print("[+] %s: %s"%(user_id, follows))


# funs
# for user in users:
#     followeds = user['followeds']
#     user_id = user['userId']
#     if followeds > 30000 and not red.sismember("scraped", user_id):
#         red.lpush("queue", user_id)
#         print("[+] %s: %s"%(user_id, followeds))
