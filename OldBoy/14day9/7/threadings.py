#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time

def hello(n):
    print("task",n)
    time.sleep(2)
    print("Done",threading.current_thread())

start_time = time.time()

t_list = []
for i in range(50):
    t = threading.Thread(target=hello,args=("t-%d"%i,))
    t.setDaemon(True)
    t.start()
    t_list.append(t)#每个线程只是实例对象，可以放到列表里，变量而已 没什么特殊的

# for t in t_list:
#     t.join()
# hello("t1")
# hello("t2")
print(threading.current_thread(),threading.active_count())
print("cost",time.time()-start_time)