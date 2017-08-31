#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


class MyType(type):
    def __init__(self,*args,**kwargs):

        print("2. Mytype __init__",*args,**kwargs)

    def __call__(self, *args, **kwargs):

        print("3. Mytype __call__", *args, **kwargs)
        obj = self.__new__(self)
        #print("5. obj ",obj,*args, **kwargs)
        #print('6. ', self)
        self.__init__(obj,*args, **kwargs)
        return obj

    def __new__(cls, *args, **kwargs):

        print("1. Mytype __new__",*args,**kwargs)
        return type.__new__(cls, *args, **kwargs)

#print('here...')


class Foo(object,metaclass=MyType):

    def __init__(self,name):
        self.name = name

        print("5. Foo __init__")

    def __new__(cls, *args, **kwargs):
        print("4. Foo __new__",cls, *args, **kwargs)
        return object.__new__(cls)

f = Foo("Alex")

#print("8. f",f)
#print("9. fname",f.name)
