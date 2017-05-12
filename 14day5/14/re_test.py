#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

import re

a = re.search(r"\\",r"abc\bdc")
print(a)
print(a.group())
####转义字符在编程语言中有效一次 在正则表达式中还会生效一次 所以要转义两次