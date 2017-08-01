#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

name = ["tom", "jack"]
data = {}

try:
    name[3]
# data['name']
# open("text.txt")
except Exception as e:  # 抓所有未知错误
    print(e)
else:  # 没有错误的时候
    print("No error")
finally:
    print("有没有错误都执行")
