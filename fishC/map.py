#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
def format_name(s):
    s1=s[0:1].upper()+s[1:].lower()
    return s1

a = ['adam', 'LISA', 'barT']
#print(list(map(format_name,a)))

print([format(i) for i in a])
