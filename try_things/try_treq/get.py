#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
# date: 2018/2/24
import treq
from twisted.internet import reactor
from twisted.web.client import readBody


def print_response(response):
    print(dir(response))
    d = readBody(response)
    d.addCallback(pbody)
    return d

def pbody(body):
    print(body)
    reactor.stop()


treq.get("http://httpbin.org/get").addCallback(print_response)
reactor.run()

