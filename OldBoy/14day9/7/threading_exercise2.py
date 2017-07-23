#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time
'''
线程只是启动了, 并没有执行完毕
'''

def run(n):
    print("task ", n)
    time.sleep(1)

start_time = time.time()

for idx in range(50):
    t = threading.Thread(target=run, args=(idx,))
    t.start()

print("cost, ", time.time()-start_time)
