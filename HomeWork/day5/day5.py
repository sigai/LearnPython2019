#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import re

userinput = "1 - 2 * ( (60-30 +(-40/5) * (9-2*5/3 + 7 /3*99/4*2998 +day10 * 568/14 )) - (-4*3)/ (16-3*2) )"

def format(expression):
    while " " in expression:
        expression = expression.replace(" ","")
    while "+-" in expression:
        expression = expression.replace("+-","-")
    while "--" in expression:
        expression = expression.replace("--","+")
    return expression

def addition(expression):
    pass

def subtraction(expression):
    pass

def multiplication(expression):
    pass

def division(expression):
    pass

def brackets(expression):
    pass

def is_result(expression):
    if "*" in expression or \
        "/" in expression or \
        "+" in expression or \
        ("-" in expression and not expression.startswith("-")):
        return False
    else:
        return True

def
expression = format(userinput)
while not is_result(expression):
    expression = brackets(expression)
