#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading,time
import queue

q = queue.Queue(5)

def Producer(name):
    i = 0
    while True:
        q.put("[%s][%s]号小姐"%(name,i))
        print("\033[31;1m[%s]的[%s]号小姐出台了..\033[0m"%(name,i))
        time.sleep(1)
        i += 1

def Consumer(name):
    while True:
        print("[%s]睡了[%s]\n"%(name,q.get()))
        time.sleep(5)

p1 = threading.Thread(target=Producer, args=("东莞酒店",))
p2 = threading.Thread(target=Producer, args=("天上人间",))
c1 = threading.Thread(target=Consumer, args=("jack",))
c2 = threading.Thread(target=Consumer, args=("mike",))
c3 = threading.Thread(target=Consumer, args=("Tomi",))

p1.start()
p2.start()

c1.start()
c2.start()
c3.start()