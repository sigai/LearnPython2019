#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from treq import get
from twisted.internet import reactor, pollreactor

pollreactor.install()
def done(response):
    print(response.code)
    reactor.stop()

get("http://www.baidu.com").addCallback(done)

reactor.run()
