#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''Manager可以生成在进程间共享和传递的数据类型'''
from multiprocessing import Manager, Process
import os


def f(d, l):
    d[os.getpid()] = os.getpid()
    l.append(os.getpid())
    print(l)


if __name__ == "__main__":
    with Manager() as manager:
        d = manager.dict()
        l = manager.list(range(5))
        p_list = []

        for i in range(10):
            p = Process(target=f, args=(d,l))
            p.start()
            p_list.append(p)

        for res in p_list:
            res.join()

        print(d)
        print(l)
