#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from multiprocessing import Process
import os
'''
mac上进程里输出的模块名是__main__
视频里的进程输出是__mp_main__
这里应该是3.6里改的, 多进程的源代码里给替换了
if '__main__' in sys.modules:
    sys.modules['__mp_main__'] = sys.modules['__main__']

'''


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
    p = Process(target=f,args=("Tom%s",))
    p.start()
