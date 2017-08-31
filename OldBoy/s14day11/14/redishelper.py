#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import redis

class RedisHelper(object):
    '''
    初始化连接, 创建频道
    定义publish和subscribe功能
    '''
    def __init__(self):
        self.__conn = redis.Redis(host='127.0.0.1',port=6379)
        self.chan_sub = 'FM104.5'
        self.chan_pub = 'FM104.5'

    def publish(self, msg):
        self.__conn.publish(self.chan_pub, msg)
        return True

    def subscrib(self):
        pub = self.__conn.pubsub()
        pub.subscribe(self.chan_sub)
        pub.parse_response()
        return pub
