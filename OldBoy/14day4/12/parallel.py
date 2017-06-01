#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

import time

def consumer(name):
    print("%s准备吃包子了！"%name)
    while True:
        baozi = yield
        print("包子[%s]来了，被[%s]吃了！"%(baozi,name))

def producer(name):
    c = consumer("A")
    c2 = consumer("B")
    c.__next__()
    c2.__next__()
    print("%s开始做包子啦！"%name)
    for i in range(0,5,2):
        time.sleep(1)
        print("%s做了一个包子！"%name)
        c.send(i)
        c2.send(i+1)
producer("老子")