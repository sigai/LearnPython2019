#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import queue

#q = queue.Queue()
#q = queue.LifoQueue()
q = queue.PriorityQueue()


for i in range(10):
    q.put((i,i*2))

for i in range(10):
    print(q.get())
