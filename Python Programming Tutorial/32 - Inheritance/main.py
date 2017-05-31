#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''继承，获得父类所有属性和方法，可重写所有任意属性和方法'''
class Parent():

    def last_name(self):
        print("fang")

class Child(Parent):

    def first_name(self):
        print("tiansheng")

    def last_name(self):
        print("liang")

sky = Child()
sky.first_name()
sky.last_name()