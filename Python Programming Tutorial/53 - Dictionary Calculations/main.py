#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''zip()内置函数'''
children = {
	'tom' : 32,
	'jimmy' : 31,
	'tom' : 18,
	'sky' : 57
}
zipdata = zip(children.values(),children.keys())
print(zipdata)#zip object
print(type(zipdata))
little = min(zipdata)
print(little)