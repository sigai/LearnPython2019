#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import redis
import time


r = redis.Redis(host='127.0.0.1', port=6379)

# a = r.set('foo','bar')  # 成功返回True
# b = r.get('foo')        # 成功返回key对应的value
# c = r.keys("*")         # 成功返回所有key的列表
# d = r.set('foo', 'BAR') # 可以更新key对应的value
# e = r.get('foo')
# f = r.set('foo', 'Tom', ex=2)    # 设置value的有效时间, 超时结束后, value设置为None
# g = r.get('foo')                # 2秒内都是bytes类型的'Tom', 超时之后为None
# time.sleep(3)
# h = r.get('foo')                # 结果为None
# i = r.setnx('foo', 'BAR')           # 不存在'foo'的时候, 'foo'才会被设置, 返回True, 否则返回False.
# j = r.psetex('foo', 1000, 'bar')        # 设置foo的值为bar, 有效时间为1000毫秒. 返回值为True
# k = r.mset(foo = 'bar', bar = 'foo')    # 根据映射设置键值对, 设置成功返回True
# l = r.mget('foo', 'bar')                # 返回所有键对应的值的列表
# m = r.getset('foo', 'BAR')                  # 设置新的值, 并返回原来的值.
# n = r.getrange('name', 4, 9)            # 返回name的子字符串, 4到9的字符串, 包含两端.
# o = r.setrange('name', 17, 'liang')   # 返回最终的值的长度, 17超过原来字符串长度, 中间用null填充
# p = r.get('name')
# q = r.getbit('name', 10)  # 返回name对应值的二进制位的第10个位置的二进制值
# s = r.setbit('name', 10, 1) # 设置name对应值的二进制值的第10位的值为1, 并返回原来的二进制的值
# t = r.bitcount('name')      # 返回name对应值的二进制值中的1的个数.
# u = r.strlen('name')        # 返回name对应值的字节bytes的长度, 跟Python字符串的len统计方法不一样. 中文一个字符为三个字节.
# v = r.incr('count')         # 把count对应的值增加1
# w = r.append('name', 'coolboy') # 在name的值后追加coolboy返回最终值的大小
# print(w, sep="\n")
