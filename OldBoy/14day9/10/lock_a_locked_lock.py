#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import threading, time


def run():
    print("lock")
    time.sleep(1)

lock = threading.Lock()

for i in range(5):
    t = threading.Thread(target=run, args=())
    lock.acquire()
    t.start()
for i in range(5):
    t = threading.Thread(target=run, args=())
    lock.release()
    t.start()