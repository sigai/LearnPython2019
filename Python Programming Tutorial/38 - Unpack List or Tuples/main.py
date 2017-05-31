#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

items =['December 23, 2015','bread gloves',8.51]
date, name, price = items

print(name)

def drop_first_last(grades):
    first, *middle, last = grades
    avg = sum(middle)/len(middle)
    print(avg)

drop_first_last([43,58,62,79,80,97])