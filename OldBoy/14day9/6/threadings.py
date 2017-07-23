#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import threading
import time

'''
多线程方式一 函数方式
args参数需要是元组类型, 如果只有一个参数, 一定要加个逗号.
'''


def hello(n):
    print("task", n)
    time.sleep(2)


t1 = threading.Thread(target=hello, args=("t1",))
t2 = threading.Thread(target=hello, args=("t2",))
t1.start()
t2.start()
# hello("t1")
# hello("t2")
