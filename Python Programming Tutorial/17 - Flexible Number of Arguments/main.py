#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''不定个数的参数'''

def add_numbers(*args):
    total = 0
    for a in args:
        total += a
    print(total)

add_numbers(3, 5, 8, 4, 6, 5)