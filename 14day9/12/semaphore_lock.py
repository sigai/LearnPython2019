#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading, time

def run(n):
    semaphore.acquire()
    time.sleep(1)
    print("%s thread is running!"%n)
    semaphore.release()

if __name__ =="__main__":
    num = 0

    semaphore = threading.BoundedSemaphore(2)

    for i in range(20):
        t = threading.Thread(target=run,args=(i,))
        t.start()
    while threading.active_count() != 1:
        pass
    else:
        print("Done")
