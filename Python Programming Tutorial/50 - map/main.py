#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''map内置函数第一个参数接收一个函数名，第二个参数接收一个可迭代对象'''
income = [10, 30, 75]


def double(dollars):
	return dollars * 2


new_income = list(map(double, income))
print(new_income)
