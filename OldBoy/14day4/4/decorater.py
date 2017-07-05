#!/usr/bin/python
# -*- coding: UTF-8 -*-
# Author:   Sigai

import time


def decorator(func):
    def warpper():
        start_time = time.time()
        func()
        stop_time = time.time()
        print('the func run time is {time}'.format(time=stop_time - start_time))

    return warpper


@decorator
def func():
    time.sleep(3)
    print('We are in the func....')


func()
