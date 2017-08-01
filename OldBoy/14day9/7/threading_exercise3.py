#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time
'''
线程只是启动了, 并没有执行完毕, 因为是多线程, 脚本本身是一个主线程, start出来的是子线程, 子线程启动后
不会影响主线程的运行
'''


def run(n):
    print("task ", n)
    time.sleep(1)
    print("task done, ", n)

start_time = time.time()

for idx in range(50):
    t = threading.Thread(target=run, args=(idx,))
    t.start()

print("cost, ", time.time()-start_time)
