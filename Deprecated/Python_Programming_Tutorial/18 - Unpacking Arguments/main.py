#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''解压序列'''


def health_calc(age,app_eat,smoked):
    answer = (100-age) + (app_eat * 3.5) - (smoked * 2)
    print(answer)

mydata = [30, 20, 0]

health_calc(*mydata)