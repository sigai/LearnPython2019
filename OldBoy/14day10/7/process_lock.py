#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''进程锁 为了防止io操作出错'''

from multiprocessing import Process, Lock


def f(l, i):
    l.acquire()
    print("*"*i)
    l.release()

if __name__ == "__main__":
    l = Lock()

    for num in range(1,10):
        p = Process(target=f,args=(l,num))
        p.start()
