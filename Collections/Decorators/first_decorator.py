#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


def a_new_decorator(a_func):
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
        a_func()
        print("I am doing some boring work after executing a_func()")
    return wrapTheFunction


# def a_function_requiring_decoration():
#     print("I am the function which needs some decoration to remove my foul smell")
#
#
# a_function_requiring_decoration()
# # outputs: "I am the function which needs some decoration to remove my foul smell"
#
# a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)
# # now a_function_requiring_decoration is wrapped by wrapTheFunction()
#
# a_function_requiring_decoration()
# # outputs:I am doing some boring work before executing a_func()
# # I am the function which needs some decoration to remove my foul smell
# # I am doing some boring work after executing a_func()

@a_new_decorator
def a_function_requiring_decoration():
    """Hey you! Decorate me!"""
    print("I am the function which needs some decoration to "
          "remove my foul smell")


a_function_requiring_decoration()
# outputs: I am doing some boring work before executing a_func()
# I am the function which needs some decoration to remove my foul smell
# I am doing some boring work after executing a_func()

# # the @a_new_decorator is just a short way of saying:
# a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)
print(a_function_requiring_decoration.__name__)