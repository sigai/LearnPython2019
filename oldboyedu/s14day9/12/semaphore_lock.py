#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time


def run(n):
    semaphore.acquire()
    time.sleep(2)
    print("%s thread is running!"%n)
    semaphore.release()

if __name__ == "__main__":
    num = 0
    # 信号量 2个
    semaphore = threading.BoundedSemaphore(2)

    # 启动线程20个
    for i in range(20):
        t = threading.Thread(target=run,args=(i,))
        t.start()

    # 等待所有线程结束
    while threading.active_count() != 1:
        pass
    else:
        print("Done")
