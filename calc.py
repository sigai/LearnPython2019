#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import re

expr = "1 - 2 * ( (9-2*5/3 + 7 /3*99/4*2998 +day10 * 568/14 )*(60-30 +(-40/5) ) - (-4*3)/ (16-3*2) )"

def clear(expr):
    while " " in expr:
        expr = expr.replace(" ","")
    while "++" in expr:
        expr = expr.replace("++","+")
    while "+-" in expr:
        expr = expr.replace("+-","-")
    while "--" in expr:
        expr = expr.replace("--","+")
##    while "-+" in expr:
##        expr = expr.replace("-+","-")
    return expr

def div(expr):
    numbers = expr.split("/")
    divsion = float(numbers[0]) / float(numbers[1])
    return clear(str(divsion))

def mul(expr):
    numbers = expr.split("*")
    multi = float(numbers[0]) * float(numbers[1])
    return clear(str(multi))

def adt(expr):
    numbers = expr.split("+")
    additive = float(numbers[0]) + float(numbers[1])
    return clear(str(additive))

def sub(expr):
    numbers = expr.split("-")
    subtraction = float(numbers[0]) - float(numbers[1])
    return clear(str(subtraction))

def cal(expr):
    if "*" in expr:
        multi=re.search(r"[-]?[0-9.]+[*][-]?[0-9.]+",expr).group()
        res=mul(multi)
        expr=expr.replace(multi,res)
    elif "/" in expr:
        divsion=re.search(r"[-]?[0-9.]+[/][-]?[0-9.]+",expr).group()
        res=div(divsion)
        expr=expr.replace(divsion,res)
    elif "-" in expr:
        subtraction=re.search(r"[-]?[0-9.]+[-][0-9.]+",expr).group()
        res=sub(subtraction)
        expr=expr.replace(subtraction,res)
    elif "+" in expr:
        additive=re.search(r"[-]?[0-9.]+[+][-]?[0-9.]+",expr).group()
        res=adt(additive)
        expr=expr.replace(additive,res)
    return clear(expr)



expr = "1 - 2 * ( (60-30 +(-40/5) * (9-2*5/3 + 7 /3*99/4*2998 +day10 * 568/14 )) - (-4*3)/ (16-3*2) )"

def meta_cal(expr):
    while True:
        mini = re.search(r"[-]?[0-9.]+[*/][-]?[0-9.]+",expr)
        if not mini:
            break
        res = cal(clear(mini.group()))
        expr = expr.replace(mini.group(),res)
    if not is_result(expr):
        expr = cal(expr)
    return clear(expr)

def is_result(expr):
    if expr == str(eval(expr)):
        return True
    else:
        return False



expr = clear(expr)

while "(" in expr:
    print(expr)
    simple = re.search(r"\([^()]+\)",expr)
    if simple == None:
        break
    res = clear(simple.group()).strip("()")
    while not is_result(res):
        res = meta_cal(res)
        expr = expr.replace(simple.group(),res)
        expr = clear(expr)
expr = cal(expr)






















