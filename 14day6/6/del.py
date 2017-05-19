#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
实例没有被引用就会被回收，执行析构方法'''
class Person:
	def __init__(self,name):
		self.name = name
	
	def __del__(self):
		print("{name} is died!".format(name=self.name))

a = Person("Tom")
print(a.name)
a = Person("Jack")
print(a.name)