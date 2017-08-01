#!/usr/bin/env python
# -*- coding: UTF-8 -*-
# Author:   Sigai

def logger():
    with open('a.log',"a+") as log:
        log.write("end action\n")


def fun1():
    print('func1')
    logger()

fun1()