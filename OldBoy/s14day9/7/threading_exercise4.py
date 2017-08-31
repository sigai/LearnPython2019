#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time

'''
多线程二 类的方式
略复杂
'''


class MyThread(threading.Thread):
    def __init__(self, num):
        super(MyThread, self).__init__()  # 继承父类用super方法
        self.num = num

    def run(self):
        print("running on number:%s" % self.num)
        time.sleep(1)


if __name__ == "__main__":

    t1 = MyThread(1)
    t2 = MyThread(2)
    t1.start()
    # t1.join()
    # t1.join() # 一个线程可以被join多次
    # t2.join() # 在线程start之前join会出发异常
    t2.start()
    threading.current_thread().join()   # 当前线程中join自己会死锁, 触发Runtime异常

    # tasks = []
    # for idx in range(10):
    #     t = MyThread(idx)
    #     tasks.append(t)
    # for tsk in tasks:
    #     tsk.start()
