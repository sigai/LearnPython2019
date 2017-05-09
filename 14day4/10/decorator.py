#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

def medicine(drug):
	print("did you eat {drug}".format(drug=drug))
	def outter(func):
		print("Do you want cure?")
		def wrapper(*args,**kwargs):
			result = func(*args,**kwargs)
			print("I cure you!")
			return result
		return wrapper
	return outter

@medicine(drug = "white and black")
def cure(ill):
	print("cure of {illness}!".format(illness=ill))
	return 1

cure("flue")
