#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

class A(object):
	p = "A"
	def __init__(self):
		print("in A")

class B(object):
	p = "B"
	def __init__(self):
		print("in B")


class C(A):
	# p = "C"
	# def __init__(self):
	# 	print("in C")
	pass

class D(A):
	p = "D"
	def __init__(self):
		print("in D")
	
class E(C,D):
	pass

test = E()
print(test.p)

