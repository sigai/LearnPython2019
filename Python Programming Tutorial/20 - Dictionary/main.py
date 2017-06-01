#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''字典简介'''

classmates = {
    'Tom':23,
    'Jone':24,
    'Mike':25,
    'Tony':21,
    'Bob':22,
}

print(classmates)
print(classmates['Tom'])

for name, age in classmates.items():
    print(name, age)