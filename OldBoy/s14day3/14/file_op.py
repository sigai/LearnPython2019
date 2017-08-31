#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import pprint
f = open(file='yesterday',mode='rb')
for i in range(5):
	print(f.readline())
f.close()