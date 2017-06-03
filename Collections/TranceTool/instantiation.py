#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from withaop import trace

class MyClass(object):

    __new__ = trace(object.__new__)  # 装饰 __new__ 方法

    #@trace # 装饰 __init__ 方法
    def __init__(self):
        pass

        # 实例化


my_instance = MyClass()