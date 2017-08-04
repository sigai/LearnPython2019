#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import redis

r = redis.Redis(host='127.0.0.1', port=6379)

a = r.hset('info', 'name', 'fang')  # info对应的hash中加入键为name, 值为fang的键值对, 已存在则更新, 否则创建.

b = r.hgetall('inf')   # 获取info中所有的键值对. 返回所有键值对的字典

c = r.hget('info', 'name')  # 获取info中的name键对应的值.

d = r.hkeys('info')     # info中所有的键, 返回所有键的列表.

e = r.hvals('info')     # info中所有的值, 返回所有值的列表.

f = r.hmset('info2', {'k1': 'v1', 'k2':'v2'})    # 批量添加键值对, 成功返回True

g = r.hmget('info2', 'k1', 'k2')                # 返回info2中所有键对应的值的列表

h = r.hlen('info2')     # 获取info2中key的个数.

i = r.hdel('info2','k1') # 删除info2中的键值对k1, 返回1

l = r.hexists('info', 'k1')     # 判断info是否有key为k1的键, 有返回True, 否则返回False



print(i, sep='\n')
