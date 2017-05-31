#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time

def hello(n):
    print("task",n)
    time.sleep(2)

t1 = threading.Thread(target=hello,args=("t1",))
t2 = threading.Thread(target=hello,args=("t2",))
t1.start()
t2.start()
# hello("t1")
# hello("t2")