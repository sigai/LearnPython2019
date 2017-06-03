#!/usr/bin/env python
# coding:utf-8
'''不知为何装饰器失效'''
import functools
import types
import hashlib
import time

class MethodTrace(object):
     """
     类方法调用轨迹
     """
     def __init__(self, cls):
         self.target = cls
         self.origin = {}

     def __enter__(self):
         # 轨迹装饰器
         def tracing(func):
             @functools.wraps(func)
             def tracing_wrapper(*args, **kwargs):
                 result = func(*args, **kwargs)
                 print("== %s : %s has been called ==" % (time.ctime(), func))
                 return result
             return tracing_wrapper
         # 遍历目标类, 安装装饰器
         for attr_name in self.target.__dict__:
             attr = getattr(self.target, attr_name)
             if type(attr) is types.MethodType:
                 # 保留原始函数
                 self.origin[attr_name] = attr
                 # 装饰
                 self._set_target(attr_name, tracing(attr))
         return self.target

     def __exit__(self, except_type, except_value, except_trac):
         # 卸载轨迹装饰器
         for k,v in self.origin.items():
             self._set_target(k,v)

     def _set_target(self, name, value):
         setattr(self.target, name, value)

class Demo(object):
    def __init__(self, name):
        self.name = name

    def hash_name(self):
        md5 = hashlib.md5()
        md5.update(self.name)
        self.name = md5.hexdigest()

def demo():
    demo = Demo('tonyseek'.encode('utf-8'))
    demo.hash_name()
    print(demo.name)

def tips(content):
    print("\n### %s ###\n" % content)

if __name__ == '__main__':
    tips("Without Decoration")
    demo()
    tips("With Decoration")
    with MethodTrace(Demo):
        demo()
    tips("Uninstalled Decorater")
    demo()