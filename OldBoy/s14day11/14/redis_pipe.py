#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

pool = redis.ConnectionPool(host='127.0.0.1', port=6379, db=0)

r = redis.Redis(connection_pool=pool)

pipe = r.pipeline(transaction=True)

pipe.set('name', 'fang')
pipe.get('name')
a = pipe.execute()  # 返回执行结果的列表
print(a)
pipe.get('name')

