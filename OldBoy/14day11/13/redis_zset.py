#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

r = redis.Redis(host='127.0.0.1', port=6379, db=2)

# a = r.zadd('names', 'zhang', 14, 'wang', 11)    # 创建有序集合, 添加元素并定义权重(分数). 返回成功添加个元素个数. (按权重升序排列), 如果元素存在, 则更新权重值(覆盖原来的权重)

# b = r.zrange('names', 0, -1)        # 返回有序集合中从开始索引到结束索引的所有元素的列表.

# c = r.zrange('names', 0, -1, withscores=True)        # 返回有序集合中从开始索引到结束索引的所有的元素和其权重的元组的列表.

# d = r.zcard('names')        # 返回有序集合中所有元素的个数

# e = r.zcount('names', 2, 11)     # 统计权重[min,max]范围内的元素个数

# f = r.zrank('names', 'fang')    # 返回值在有序集合中的排名, 从0开始.

# g = r.zrangebylex('names', '-', '+')      # 在所有元素权重相同的情况下排序, 没什么卵用.

# h = r.zrem('names', 'zhang', 'wang')    # 删除有序集合中的值, 返回成功删除的个数

# i = r.zremrangebyrank('names', 2, 3)    # 根据排行[min, max]范围删除元素, 返回删除的元素个数

# j = r.zremrangebyscore('names', 3, 9)  # 根据权重[min, max]范围删除元素,返回删除的元素个数.

# k = r.zscore('names', 'fang')       # 获取集合中, 值的对应权重(分数), 返回分数的浮点类型.

l = r.zinterstore('res', {'names', 'english'}, aggregate="MIN")      # 获取集合的交集并保存到另一个集合中, 如果有元素的值相同, 则根据aggregate参数的类型(SUM默认,MIN,MAX)处理其权重, 返回交集元素个数.

print(l)

