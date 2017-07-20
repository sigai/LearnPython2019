#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


class Foo(object):

    def __call__(self):
        print("call")

bar = Foo()
bar()
