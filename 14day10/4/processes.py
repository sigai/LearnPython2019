#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''多进程，每个进程带一个线程'''

import multiprocessing
import time, threading

def run(name):
    time.sleep(1)
    print("hello",name)
    t = threading.Thread(target=print,args=("I'm Thread",))
    t.start()

for i in range(10):
    p = multiprocessing.Process(target=run,args=("Process no:%s"%i,))
    p.start()