#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''默认参数'''


def get_gender(sex="Unknown"):
    if sex is 'm':
        sex = "Male"
    elif sex is 'f':
        sex = "Female"
    print(sex)

get_gender('m')
get_gender('f')
get_gender()