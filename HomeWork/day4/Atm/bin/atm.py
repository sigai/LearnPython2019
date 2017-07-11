#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os
import sys

# 添加环境变量
base_dir = os.path.dirname(os.path.dirname((os.path.abspath(__file__))))
sys.path.insert(1, base_dir)
# print([BASE_DIR,])
from core import main

if __name__ == '__main__':
    main.run()
