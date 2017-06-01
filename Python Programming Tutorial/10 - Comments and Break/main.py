#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''注释和break跳出本层循环'''
magicNumber = 26

for n in range(100):
    if n is magicNumber:
        print(n,'is the magic number!')
        break
    else:
        print(n)

for n in range(10):
    for y in range(20):
        if y == 15:
            print('y ',y)
            break