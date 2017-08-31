#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

r = redis.Redis(host='127.0.0.1', port=6379, db=1)

# a = r.lpush('names', 'fang', 'liang', 'zhang','li', 'zhao')     # 创建列表names, 并向列表左边添加元素, 返回创建的列表里元素的个数.

# b = r.lrange('names', 0, -1)        # 返回names列表中索引0开始到索引-1的值组成的Python列表, 类似Python列表的切片.

# c = r.rpush('names', 'fangtiansheng')        # 向列表末尾添加元素, 并返回列表长度, 即列表元素个数.

# d = r.linsert('names', 'before', 'liang', 'liangxiaotong')      # 返回插入之后的列表长度, 失败返回-1, 即liang不存在names列表的情况下

# e = r.lset('names', 3, 'LIANGXIAOTONG')     # 更改names中的索引值为3的元素, 成功返回True

# f = r.lrem('names', 'liang', 2)         # 从前往后删除names列表中的2个值为liang的元素, 返回成功删除的个数.

# g = r.lpop('names')     # 获取names列表中的第一个元素, 并从列表里删除, 返回这个元素

# h = r.lindex('names', 3)    # 根据索引值返回names中的元素. 返回该元素的值.

# i = r.ltrim('names', 1, 3)  # 保留names列表中索引1到索引3的值, 删除其他值, 成功返回True

# j = r.rpoplpush('name', 'names')    # 把name列表里的最右侧的元素, 放进names列表里的最左侧, 返回该元素的值, name为空则返回None.

# k = r.blpop('name',3)   # 取name中的第一个元素, 如果没有则等待3秒, 如果有则从列表中删除这个元素并返回列表和这个元素的python元组, 如果超时还没有, 则返回None

l = r.brpoplpush('names', 'names', 3)        # 取name中最右侧的值放入names最左侧, 超时3秒, 返回这个值, name中无值则等待超时结束, 失败则返回None.
print(l)
