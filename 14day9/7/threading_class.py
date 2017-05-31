#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time

class MyThread(threading.Thread):
    def __init__(self,num):
        super(MyThread,self).__init__()#继承父类用super方法
        self.num = num

    def run(self):
        print("running on number:%s"%self.num)
        time.sleep(1)

if __name__ == "__main__":
    t1 = MyThread(1)
    t2 = MyThread(2)
    t1.start()
    t2.start()