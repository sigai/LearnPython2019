#!/usr/bin/python
# -*- coding: UTF-8 -*-

f = open('yesterday','r',encoding='utf-8')
count = 0
for line in f:
	count += 1
	if count == 9:
		print('-'*10)
	print(line)
	
f.close()