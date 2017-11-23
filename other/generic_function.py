#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
generic function
singledispatch
'''
from functools import singledispatch
from decimal import Decimal

@singledispatch
def func(arg, verbose=False):
    if verbose:
        print("Let me just say,", end=" ")
    print(arg)

@func.register(int)
def _(arg, verbose=False):
    if verbose:
        print("Strength in numbers, en?", end=" ")
    print(arg)

@func.register(list)
def _(arg, verbose=False):
     if verbose:
         print("Enumerate this:")
     for i, elem in enumerate(arg):
         print(i, elem)

def nothing(arg, verbose=False):
     print("Nothing.")
func.register(type(None), nothing)

@func.register(float)
@func.register(Decimal)
def fun_num(arg, verbose=False):
    if verbose:
        print("Half of your number:", end=" ")
    print(arg / 2)

if __name__ == '__main__':
    func("Hello world", verbose=True)
    func(2, verbose=True)
    func(3.5, verbose=True)
    func(None, verbose=True)