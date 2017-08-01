#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


def hi():
    return "hi yasoob!"


def doSomethingBeforeHi(func):
    print("I am doing some boring work before executing hi()")
    print(func())


doSomethingBeforeHi(hi)
# outputs:I am doing some boring work before executing hi()
# hi yasoob!
