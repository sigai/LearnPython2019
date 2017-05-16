# -*- coding: UTF-8 -*-
import re

expr = "1 - 2 * ( (60-30 +(-40/5) * (9-2*5/3 + 7 /3*99/4*2998 +10 * 568/14 )) - (-4*3)/ (16-3*2) )".replace(" ","")

def clean_format(expr):
    while " " in expr:
        expr = expr.replace(" ","")
    while "+-" in expr:
        expr = expr.replace("+-","-")
    while "--" in expr:
        expr = expr.replace("--","+")
    return expr

def div(expr):
    numbers = expr.split("/")
    divsion = float(numbers[0]) / float(numbers[1])
    return clean_format(str(divsion))

def mul(expr):
    numbers = expr.split("*")
    multi = float(numbers[0]) * float(numbers[1])
    return clean_format(str(multi))

def adt(expr):
    numbers = expr.split("+")
    additive = float(numbers[0]) + float(numbers[1])
    return clean_format(str(additive))

def sub(expr):
    numbers = expr.split("-")
    subtraction = float(numbers[0]) - float(numbers[1])
    return clean_format(str(subtraction))

def cal(expr):
    if "*" in expr:
        multi=re.search(r"[0-9\.]+\*[0-9\.]+",expr).group()
        res=mul(multi)
        expr=expr.replace(multi,res)
    elif "/" in expr:
        divsion=re.search(r"[0-9\.]+\/[0-9\.]+",expr).group()
        res=div(divsion)
        expr=expr.replace(divsion,res)
    elif "-" in expr:
        subtraction=re.search(r"[0-9\.]+\-[0-9\.]+",expr).group()
        res=sub(subtraction)
        expr=expr.replace(subtraction,res)
    elif "+" in expr:
        additive=re.search(r"[0-9\.]+\+[0-9\.]+",expr).group()
        res=adt(additive)
        expr=expr.replace(additive,res)
    return clean_format(expr)

def cal_mul_or_div(expr):
    while "*" in expr or "/" in expr:
        e=re.search(r"[0-9\.]+[\*\/][0-9\.]+",expr).group()
        res = cal(e)
        expr=expr.replace(e,res)
    return clean_format(expr)

def cal_add_or_sub(expr):
    while "+" in expr or "-" in expr:
        try:
            e = re.search(r"[0-9\.]+[\+][0-9\.]+",expr).group()
        except AttributeError:
            return clean_format(expr)
        res = cal(e)
        expr = expr.replace(e,res)
    return clean_format(expr)

def cal_mini(expr):
    while "(" in expr:
        mini = re.search(r"\([^()]+\)",expr).group()
        res = mini
        if not is_result(res):
            res = cal_mul_or_div(mini.strip("()"))
        if not is_result(res):
            res=cal_add_or_sub(res)
    return clean_format(expr)

def cal_last(expr):
        if not is_result(expr):
            res = cal_mul_or_div(expr.strip("()"))
        if not is_result(res):
            res=cal_add_or_sub(res)
        return clean_format(res)
def is_result(expr):
    if "*" in expr or "/"in expr or "+" in expr or ("-" in expr and (not expr.startswith("-"))):
        return False
    else:
        return True
        
expr = clean_format(expr)
e=cal_mini(expr)
#e=cal_last(e)
print(e)

