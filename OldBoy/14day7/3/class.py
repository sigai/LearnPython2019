#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''类方法只能访问类变量，不能访问实例变量'''


class Dog(object):
    n = 2333

    def __init__(self, name):
        self.name = name

    @classmethod
    def eat(self):
        print("%s is eating %s" % (self.n, "banana"))


a = Dog("Tom")
a.eat()
