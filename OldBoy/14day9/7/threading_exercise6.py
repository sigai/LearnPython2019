#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time

'''
多线程二 类的方式
略复杂
'''


class MyThread(threading.Thread):
    def __init__(self, num, sleep_time):
        super(MyThread, self).__init__()  # 继承父类用super方法
        self.num = num
        self.sleep_time = sleep_time

    def run(self):
        print("running on number:%s" % self.num)
        time.sleep(self.sleep_time)
        print(self.num, " done")


if __name__ == "__main__":

    t1 = MyThread(1, 2)
    t2 = MyThread(2, 4)
    t1.start()
    t1.join()

    t2.start()
    print("main thread")
    # tasks = []
    # for idx in range(10):
    #     t = MyThread(idx)
    #     tasks.append(t)
    # for tsk in tasks:
    #     tsk.start()
