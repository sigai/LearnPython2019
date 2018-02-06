#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
# for n in range(2, 10):
#     for x in range(2, n):
#         if n % x == 0:
#             print( n, 'equals', x, '*', n/x)
#             break
#     else:
#         # loop fell through without finding a factor
#         print(n, 'is a prime number')

import os
from pathlib import Path
print(os.path.abspath(os.path.dirname(__file__)))
path = Path(__file__)
print(dir(path))
print(path.parts)
