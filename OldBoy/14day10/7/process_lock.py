#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''进程锁 为了防止io操作出错'''

from multiprocessing import Process, Lock
import time


def f(l, i):
    l.acquire()
    time.sleep(1)
    print("I count ", i)
    time.sleep(1)
    l.release()

if __name__ == "__main__":
    l = Lock()

    for num in range(500):
        p = Process(target=f,args=(l,num))
        p.start()
