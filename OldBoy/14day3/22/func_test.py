#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

def func(x,y=7,*args,**kwargs):
    print(x)
    print(y)
    print(args)
    print(kwargs)

func(4,8,9,9,a=6,b=4,c=8)