#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time


def run(n):
    print("task ", n)
    time.sleep(1)

for idx in range(50):
    t = threading.Thread(target=run, args=(idx,))
    t.start()
