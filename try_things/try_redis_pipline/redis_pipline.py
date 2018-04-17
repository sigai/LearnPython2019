#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from redis import StrictRedis


R = StrictRedis.from_url('redis://@167.99.67.209:6379/10')

# with R.pipeline() as p:
#     for i in range(100000):
#         p.sadd("test", i)
#     p.execute()


with R.pipeline() as p:
    for i in range(100000):
        p.spop("test")
    a = p.execute()
    print(a[0])

