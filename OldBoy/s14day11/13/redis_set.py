#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import redis

r = redis.Redis(host='127.0.0.1',port=6379, db=1)

# a = r.sadd('names3', 'zhao', 'fang', 'liang')     # 创建集合names3, 并添加元素zhao, 如果集合names3存在, 则添加zhao到集合中. 返回成功添加的元素个数.
#
# b = r.smembers('names3')        # 返回集合names3中所有元素的Python集合
#
# c = r.scard('names3')       # 返回集合names3中元素的个数.
#
# d = r.sdiff('names3', 'names4')     # 返回names3中有, names4中没有的所有元素的python集合
#
# f = r.sdiffstore('names5', 'names3', 'names4')      # 获取names3中有, names4中没有的元素, 保存到names5中, 返回元素个数.
#
# g = r.sinter('names3', 'names4')    # 返回names3和names4的交集的python集合形式.
#
# h = r.sinterstore('names6', 'names3', 'names4')     # 获取names3 和 names4的交集并保存到names6中, 返回交集中的元素个数.
#
# i = r.sismember('names3', 'fang')   # 判断值是否是集合的元素, fang是names3的元素则返回True, 否则返回False
#
# j = r.smove('names3', 'names4', 'fang')    # 把值从集合移动到另一个集合, 成功的返回True

# k = r.spop('names3')    # 返回集合第一个元素的值, 并把值从集合中删除

# l = r.srandmember('names4',number=2)     # 随机返回集合中number个元素的Python列表.

# m = r.srem('names3','fang', 'zhao')     # 删除集合中的值, 返回成功删除的元素个数

# n = r.sunion('names3', 'names4')    # 获取集合的并集, 返回并集的Python集合形式.

# o = r.sunionstore('names5', 'names3', 'names4')    # 获取集合的并集, 并保存到集合中, 返回并集的元素个数.

# p = r.sscan('names5', 1, match='fang',count=1)     # 从游标位置开始,获取集合中满足match的所有元素. 返回第一个元素为匹配结束的游标位置,第二个元素为满足match的元素的列表, 所组成的两个元素的Python元组.

q = r.sscan_iter('names5', match='fang', count=1)   # 返回符合匹配模式的所有集合中的元素的迭代器

for i in q:
    print(i)
