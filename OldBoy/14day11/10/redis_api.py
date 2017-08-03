#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import redis

r = redis.Redis(host='127.0.0.1', port=6379)

r.set('foo','bar')
r.get('foo')

print(r.get('foo').decode('utf-8'))
