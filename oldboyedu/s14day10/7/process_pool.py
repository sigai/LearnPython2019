#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''进程池中进程执行完毕后再关闭 先close 后join.
回调函数 是主进程调用的 连数据库之类的操作可减少操作 其他类操作可在进程内完成'''

from multiprocessing import Process, Pool
import time, os


def Foo(i):
    time.sleep(1)
    print(i,os.getpid())
    return 100 + i


def Bar(arg):
    print("--->exec Done:", arg, os.getpid())


# print(__name__)

if __name__ == "__main__":
    pool = Pool(processes=3, )    # 允许进程池同时放入3个进程

    print("主进程PID:", os.getpid())
    for i in range(10):
        pool.apply_async(func=Foo,args=(i,),callback=Bar)   # 回调
        # pool.apply_async(func=Foo,args=(i,))# 并行
        # pool.apply(func=Foo,args=(i,))# 串行

    print("end")
    pool.close()
    pool.join()
