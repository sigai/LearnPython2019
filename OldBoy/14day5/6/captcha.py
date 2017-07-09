#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import random


def get_captcha(n):
    captcha = ''
    for i in range(n):
        ran = random.randrange(n)
        if ran == i:
            ran = chr(random.randint(65, 90))
        else:
            ran = random.randrange(10)
        captcha += str(ran)
    return captcha

a = get_captcha(9)
print(a)
