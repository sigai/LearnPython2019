#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

def calc(n):
    print(n)
    if n//2 >0:
        return calc(n//2)
    print("->",n//2)

calc(60)