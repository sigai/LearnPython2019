#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
e是MyException类被raise后MyException('ERROR')实例化的对象
e是异常类的对象
'''

class MyException(Exception):
    def __init__(self, msg):
        self.msg = msg

    # def __str__(self):
    #     return 'str'
    def __repr__(self):
        return 'repr'

try:
    raise MyException('ERROR')
except MyException as e:
    print(e)