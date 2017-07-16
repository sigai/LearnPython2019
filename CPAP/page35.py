#!/usr/bin/env python3
import re


data = 'Thu Mar 10 17:01:17 2118::frllzis@eanfltevk.com::4676346077-7-9'

r1 = '^Mon|^Tue|^Wed|^Thu|^Fri|^Sat|^Sun'
r2 = '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)'
r3 = '^(\w{3})'
r4 = '^(\w){3}'
m1 = re.match(r1, data)
m2 = re.match(r2, data)
m3 = re.match(r3, data)
m4 = re.match(r4, data)
# print(m1.group())
# print(m1.group(1))
# print(m1.groups())
# print(m2.group())
# print(m2.group(1))
# print(m2.groups())
# print(m3.group())
# print(m3.group(1))
# print(m3.groups())
print(m4.group())
print(m4.group(1))
print(m4.groups())
