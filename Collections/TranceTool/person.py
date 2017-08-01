#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from withaop import trace


class Person(object):
    __new__ = trace(object.__new__)

    @trace
    def __init__(self, username, password, **kwargs):
        self.usr, self.pwd = username, password
        self.opt = kwargs


# tonyseek = Person('tonyseek','my_password',has_blog=True,has_notebook=False)

#tonyseek = object.__new__(Person,'tonyseek','my_password',has_blog=True,has_notebook=False)
tonyseek = Person.__new__(Person,'tonyseek','my_password', has_blog=True,has_notebook=False)

print(tonyseek)
print(tonyseek.usr)
