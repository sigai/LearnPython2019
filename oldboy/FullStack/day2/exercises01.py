#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

numbers = [11,22,33,44,55,66,77,88,99,90]

result = {'k1':[],'k2':[],}

for i in numbers:
    if i > 66:
        result['k1'].append(i)
    elif i < 66:
        result['k2'].append(i)


print(result)