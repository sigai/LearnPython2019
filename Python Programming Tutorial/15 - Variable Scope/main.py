#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''变量作用域
全局变量和局部变量'''
a = 8748

def corn():
    print(a)

def fudge():
    print(a)

corn()
fudge()