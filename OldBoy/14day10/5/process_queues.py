#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
父进程创建进程队列, 子进程操作队列, 父进程再打印队列元素
'''
import multiprocessing


def f(que):
    que.put([42,None,"Hello"])

if __name__ == "__main__":
    q = multiprocessing.Queue()
    p = multiprocessing.Process(target=f,args=(q,))
    p.start()
    print(q.get())
    p.join()
