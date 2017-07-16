#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''属性方法，把一个方法变成属性'''


class Dog(object):
    n = 22

    def __init__(self, name):
        self.name = name
        self.__food = None

    @property
    def eat(self):
        print("%s is eating %s" % (self.n, self.__food))

    @eat.setter
    def eat(self, food):
        self.__food = food

    # print("%s is eating %s" % (self.name, self.__food))

    @eat.deleter
    def eat(self):
        del self.__food


a = Dog("Tom")
a.eat
a.eat = "banama"
a.eat
del a.eat
a.eat