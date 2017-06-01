#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import multiprocessing
import time
import os

def info(title):
    print(title)
    print("module name:", __name__)
    print("parent process:",os.getppid())
    print("process ID:",os.getpid())
    print("-"*10)

def f(name):
    info("\033[31;mfunction f\033[0m")
    print("Hello", name)

if __name__ == "__main__":
    info("\033[31;mMain Process Line.\033[0m")
    p = multiprocessing.Process(target=f,args=("Tom",))
    p.start()