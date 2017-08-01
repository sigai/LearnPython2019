#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

pool = redis.ConnectionPool(host='127.0.0.1',port=6379)#连接池
r = redis.Redis(connection_pool=pool)

# r = redis.Redis(host='127.0.0.1',port=6379)
r.set("foo","bar")
print(r.get('foo'))
