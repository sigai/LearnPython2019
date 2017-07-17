#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


class Person(object):

    nation = 'Chinese'

    def __init__(self,name):
        self.name = name
        self.__PH = 100

    def showPH(self):
        return self.__PH

p1 = Person('Tony')

p2 = Person('LEE')
p3 = Person('MahYun')

p1.nation = 'USA'

print(p1.nation, p1.showPH(), p2.nation, p3.nation)