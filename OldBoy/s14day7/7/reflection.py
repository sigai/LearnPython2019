#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
反射
hasattr(obj,str)判断一个对象obj里是否有指定的str字符串的方法
getattr(obj,str)根据字符串去获取obj中对应的方法的内存地址
setattr(obj,str,value)通过字符串设置对象的属性或方法
delattr(obj,str)通过字符串删除对象对应的属性或方法'''


class Dog(object):
    def __init__(self, name):
        self.name = name

    def eat(self, food):
        print("%s is eating %s" % (self.name, food))


def bulk(self):
    print("%s in yealing" % self.name)


a = Dog("Tom")
choice = input(">>:").strip()

if hasattr(a, choice):
    # f=getattr(a,choice)
    # setattr(a,choice,"jack")
    delattr(a, choice)
else:
    # setattr(a,choice,bulk)
    # a.talk(a)
    setattr(a, choice, 22)
    a = getattr(a, choice)
    print(a)

print(a.name)
