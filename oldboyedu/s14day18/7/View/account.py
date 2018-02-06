#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time


def handle_index():
    with open("Template/index.html", mode='r', encoding='utf-8') as f:
        data = f.read()
    data = data.replace("@uuuuu",time.ctime())
    return [bytes(data, encoding='utf-8'), ]


def handle_home():
    return [bytes('<h1>Hello, home!</h1>', encoding='utf-8'), ]
