#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import functools
import types
import hashlib
import time


# class tracer(object):
#
#     def __call__(self, func):
#         """轨迹装饰器, 装饰目标函数"""
#
#         @functools.wraps(func)
#         def tracing_wrapper(*args, **kwargs):
#             result = func(*args, **kwargs)
#             print("\033[31;1m-->\033[0m %s 调用: %s " % (time.ctime(), func))
#             for arg in args:
#                 print("\033[31;1m>\033[0m 参数: %s" % repr(arg))
#             for argk, argv in kwargs.items():
#                 print("\033[31;1m>\033[0m 关键字参数: %s = %s" % (repr(argk), repr(argv)))
#             print("\033[31;1m>\033[0m 返回: %s" % repr(result))
#             return result
#
#         return tracing_wrapper


def trace(func):
    """轨迹装饰器, 装饰目标函数"""

    @functools.wraps(func)
    def tracing_wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print("\033[31;1m-->\033[0m %s 调用: %s " % (time.ctime(), func))
        for arg in args:
            print("\033[31;1m>\033[0m 参数: %s" % repr(arg))
        for argk, argv in kwargs.items():
            print("\033[31;1m>\033[0m 关键字参数: %s = %s" % (repr(argk), repr(argv)))
        print("\033[31;1m>\033[0m 返回: %s" % repr(result))
        return result

    return tracing_wrapper