#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		#print(b)
		yield b
		a, b = b, a + b
		n = n + 1
	return "done"
print(fib(10).__next__())