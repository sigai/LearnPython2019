#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from redishelper import RedisHelper


subscriber = RedisHelper()

sub = subscriber.subscribe()

while True:
    msg = sub.parse_response()
    print(msg)
