#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import gevent
'''
遇到IO操作就切换
'''


def foo():
    print("Running in foo.")
    gevent.sleep(2)     # 模拟io操作
    print("Explicit context switch to foo again.")


def bar():
    print("Explicit context to bar.")
    gevent.sleep(1)
    print("Implicit context switch back to bar.")


def func():
    print("Running func.")
    gevent.sleep(0)
    print("End of func.")


gevent.joinall([
    gevent.spawn(foo),  # spawn生成
    gevent.spawn(bar),
    gevent.spawn(func),
])
