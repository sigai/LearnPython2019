#! /usr/bin/env python
# -*- coding: UTF-8 -*-
# 元类会跟`type`一样传递参数
def upper_attr(future_class_name, future_class_parents, future_class_attr):
    '''
    返回一个类对象, 将他的属性列表转为大写字母.
    '''
    # 过滤出不是双下划线开头的属性, 并转为大写字母
    uppercase_attr = {}
    for name, val in future_class_attr.items():
        if not name.startswith('__'):
            uppercase_attr[name.upper()] = val
        else:
            uppercase_attr[name] = val
    # 用`type` 创建类
    return type(future_class_name, future_class_parents, uppercase_attr)

#这样会对模块里的所有类都有效 
__metaclass__ = upper_attr


class Foo():
    #__metaclass__ = upper_attr
    # 全局的 `__metaclass__`不会对`object`有效果, 但是我们可以在这定义`__metaclass__`,就不是只对这一个类有效, 而是对所有`object`子类都起作用了.
    bar = 'bip'

print(hasattr(Foo, 'bar'))
# 输出 False
print(hasattr(Foo, 'BAR'))
# 输出 True
f = Foo()
print(f.BAR)
# 输出 'bip'

