#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''continue跳出本次循环'''


numbersTaken = [2,5,12,15,18]

print("There are the numbers that are still available:")

for n in range(1,20):
    if n in numbersTaken:
        continue
    print(n)