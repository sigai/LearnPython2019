#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import gevent
'''
遇到IO操作就切换
'''


def foo():
    print("Running in foo.")
    gevent.sleep(2)     # 模拟io操作
    print("Explicit context switch to foo again.")  #明确的下文切换回foo


def bar():
    print("Explicit context to bar.")   # 明确的下文到bar
    gevent.sleep(1)
    print("Implicit context switch back to bar.")   # 隐性的下文回到bar


def func():
    print("Running func.")
    gevent.sleep(0)
    print("End of func.")


gevent.joinall([
    gevent.spawn(foo),  # spawn生成greenlet对象, 并加入joinall列表
    gevent.spawn(bar),
    gevent.spawn(func),
])
