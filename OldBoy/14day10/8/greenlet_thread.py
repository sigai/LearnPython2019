#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from greenlet import greenlet
'''
很像一边玩游戏, 一边聊QQ, 来回切换的样子.
'''


def test1():
    print(12)
    gr2.switch()    # 2.同gr1.switch() 会去执行自己的run方法
    print(34)
    gr2.switch()    # 4.同3, 重新激活上次切出的状态


def test2():
    print(56)
    gr1.switch()    # 3.已经是激活状态的greenlet对象, 执行switch会重新激活
    print(78)


gr1 = greenlet(test1)   # 创建greenlet对象, 创建协程(没有开始运行)
gr2 = greenlet(test2)
gr1.switch()    # 1.greenlet对象第一次switch执行自己的run方法
