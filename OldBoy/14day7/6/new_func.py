#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time

class Foo(object):

    def __init__(self):
        print("in __init__")

    def __new__(cls, *args, **kwargs):
        print('in __new__')
        time.sleep(1)
        a = object.__new__(cls)
        print(a)
        return a

c = Foo()
print(c)