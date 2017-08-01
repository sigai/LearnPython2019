#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''类变量和实例变量'''


class Girl():
    gender = 'female'

    def __init__(self, name):
        self.name = name


r = Girl('Swift')
print(Girl.gender)
print(r.name)
