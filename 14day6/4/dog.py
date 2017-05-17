#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

class Dog:
	def __init__(self,name):
		self.name = name
	def bulk(self):
		print("{name}:wang wang wang!".format(name = self.name))
		
dog1 = Dog("No1")
dog2 = Dog("No2")
dog3 = Dog("No3")

dog1.bulk()
dog2.bulk()
dog3.bulk()