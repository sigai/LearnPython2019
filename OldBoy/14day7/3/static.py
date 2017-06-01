#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''静态方法相当于不带参数的函数与类没什么关系了，
静态方法不能访问类或对象里的任何属性'''
class Dog(object):
	
	def __init__(self,name):
		self.name = name
		
	@staticmethod
	def eat():
		print("%s is eating %s"%("li","banana"))

a = Dog("Tom")
a.eat()