#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from functools import wraps


def decorator_name(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        result =f(*args,**kwargs)
        if not can_run:
            return "Function will not run"
        return result

    return decorated


@decorator_name
def func():
    return ("Function is running")


can_run = True
print(func())
# Output: Function is running

can_run = False
print(func())
# Output: Function will not run
