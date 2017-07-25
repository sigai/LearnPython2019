#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time


def run(n):
    p = threading.Thread(target=print, args=("%s"%n,dir(threading.current_thread())))
    p.start()
    time.sleep(1)

for idx in range(1):
    t = threading.Thread(target=run, args=(idx,))
    t.daemon = True
    t.start()
c = threading.current_thread()
print(c)
print(type(c))
print(dir(c))