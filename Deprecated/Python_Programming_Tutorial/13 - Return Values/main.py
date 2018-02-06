#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''函数返回值，为了存储数据，用于后续加工'''


def allowed_dating_age(my_age):
    girls_age = my_age/2 + 7
    return girls_age

my = allowed_dating_age(30)

print(my)