#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

r = redis.Redis(host='127.0.0.1', port=6379, db=0)

# a = r.keys(pattern= '*')    # 返回数据库中pattern匹配到的任意类型的键的列表.
#
# b = r.delete('flag', 'info3', 'info2')    # 删除数据库中的任意数据, 返回成功操作的个数
#
# c = r.exists('flag')    # 判断任意类型是否存在数据库中. 存在返回True, 否则返回False

# d = r.expire('info2', 10)    # 为任意类型数据设置有效时间, 单位s. 数据存在, 过期后删除数据, 返回True, 不存在返回False.

# e = r.rename('count', 'flag')   # 重命名数据库任意类型的键, 存在则重命名,返回True, 不存在则触发`redis.exceptions.ResponseError: no such key`异常.

# f = r.move('flag', db=10)       # 把当前数据库中的数据, 移动到其他数据库, 如果其他数据库没有同名数据, 则返回True,否则返回False, 并不会更改数据.

# g = r.randomkey()   # 随机获取当前数据库中的数据, 并返回该值

# h = r.type(g)   # 返回数据的类型, 数据不存在则返回None

# i = r.scan(cursor=0, match='*', count=1)   # 匹配当前数据库的数据, 返回结束游标和结果的列表的二元元组. cursor匹配的开始位置, match匹配的格式, count匹配个数

j = r.scan_iter(match='*', count=1)     # 根据匹配模式, 返回结果的迭代器, match匹配格式, count匹配个数.
print( j)
