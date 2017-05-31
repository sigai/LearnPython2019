#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import time
import threading

event = threading.Event()

def light():
    count = 0
    event.set()
    while True:
        if count > 5 and count <10:
            event.clear()
            print("\033[41;1m %s\033[0m"%(10 - count))
        elif count >= 10:
            event.set()
            count = 0
        else:
            print("\033[42;1m %s\033[0m"%(5 - count))
        time.sleep(1)
        count += 1

def car(name):
    while True:
        if event.is_set():
            print("\033[32;1m%s in running...\033[0m"%name)
            time.sleep(1)
        else:
            print("\033[31;1m%s stop.."%name)
            event.wait()
            print("\033[32;1m%s start running...\033[0m"%name)

lighter = threading.Thread(target=light)
lighter.start()
car1 = threading.Thread(target=car,args=("ofo",))
car1.start()