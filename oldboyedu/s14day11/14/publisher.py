#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from redishelper import RedisHelper
import time

publisher = RedisHelper()
result = publisher.publish(time.ctime())
print(result)
