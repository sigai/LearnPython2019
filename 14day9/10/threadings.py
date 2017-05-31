#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''有时候加锁也不行，不过打印的结果是未结束的结果'''

import threading
import time

num = 0
lock = threading.Lock()

def run(n):
    lock.acquire()
    global num
    num += 1
    lock.release()

for i in range(2000):
    t = threading.Thread(target=run,args=("t-%d"%i,))
    t.start()

# for t in t_list:
#     t.join()
# hello("t1")
# hello("t2")
print(num)