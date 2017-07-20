#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

# lib = __import__('lib.aa')
#
# lib.aa.c()

# 官方推荐使用导入方法 可以直接导入aa, __import__是解释器使用的方法, 只能导入到最顶层.

import importlib

aa = importlib.import_module('lib.aa')

aa.c()
