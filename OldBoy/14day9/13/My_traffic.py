#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
以为自己能写出好的, 结果只是把交通灯弄的更清楚一些罢了.
'''
import threading, time


event = threading.Event()
event.set()


def light():
    count = 0
    while True:
        count += 1
        if 6 >= count >0:
            event.set()
            print("green")
        elif 10 >= count > 6:
            event.clear()
            print("red")
        else:
            count = 0
        time.sleep(1)


def car(name):
    while True:
        if event.is_set():
            print("[%s] running."%name)
            time.sleep(1)
        else:
            print("[%s] stopping" % name)
            event.wait()
            print("[%s] start to go"%name)


tri_light = threading.Thread(target=light, args=())
tri_light.start()
car1 = threading.Thread(target=car, args=("Tesla",))
car2 = threading.Thread(target=car, args=("BMW",))
car1.start()
car2.start()
