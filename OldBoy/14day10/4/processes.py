#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''多进程，每个进程带一个线程'''

import multiprocessing
import time, threading


# 每个线程或进程要运行的函数一定要单独写, 如果直接用print,当参数是动态获取的值的时候会有问题
# 因为写在实例化进程的时候,进程还没有启动, 所以获取不到应该获取的线程的信息, 得到的是主线程的信息, 所以会有意外的结果.
def thread_run():
    print('bye, ', threading.get_ident())


def run(name):
    time.sleep(1)
    print("hello", name)
    t = threading.Thread(target=thread_run)
    t.start()


for i in range(10):
    p = multiprocessing.Process(target=run, args=("Process no:%s" % i,))
    p.start()
