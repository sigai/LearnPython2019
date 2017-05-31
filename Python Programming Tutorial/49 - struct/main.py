#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''主要作用就是对python基本类型值与用python字符串格式表示的C struct类型间的转化'''
from struct import *

packed_data = pack('iif',6,19,4.369)
print(packed_data)

print(calcsize('i'))
print(calcsize('f'))
print(calcsize('iif'))
print(calcsize('s'))

#To get bytes data back to normal
original_data = unpack('iif',packed_data)
print(original_data)

print(unpack('iif', b'\x06\x00\x00\x00\x13\x00\x00\x00\xd9\xce\x8b@'))