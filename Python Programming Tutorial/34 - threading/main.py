#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''老子的爱姬太快了,还需要sleep一下才能看到效果'''

import threading, time


# def show():
#     for _ in range(10):
#         print(threading.current_thread().getName())
#
# x = threading.Thread(target=show,name='Sending')
# y = threading.Thread(target=show,name='Receiving')


class Messenger(threading.Thread):
    def run(self):
        for _ in range(10):
            print(threading.current_thread().getName())
            time.sleep(1)


x = Messenger(name='Sending')
y = Messenger(name='Receiving')
x.start()
y.start()
