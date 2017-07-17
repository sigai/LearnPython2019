#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

# class Foo(object):
#
#     def __init__(self, name):
#         self.name = name
#
# f = Foo("test")


def func(self):
    print("Hello")


def init(self, name, age):
    self.name = name
    self.age = age


Foo = type('Foo', (object,), {'speak': func, '__init__': init})

f = Foo('bar','3')
print(f.name, f.age)
print(type(f), type(Foo))
