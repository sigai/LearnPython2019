#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import threading
import time
'''
诶呀 有进步啊 以前以为添加到列表里的只是变量
列表是容器,可以装任何类型的对象, 这里就是装的thread对象, 表面上只是变量, 知道多一些, 理解就真的很容易了
'''


def hello(n):
    print("task",n)
    time.sleep(2)
    #print("Done",threading.current_thread())
    print(n, "done")

start_time = time.time()

t_list = [] # 存线程实例
for i in range(50):
    t = threading.Thread(target=hello,args=("t-%d"%i,))
    t.setDaemon(True)   #设置线程为守护线程, 下等人, 整个Python程序等待所有非守护线程结束后才结束. 而不管守护线程.
    t.start()
    # t.setDaemon(True) # 线程启动后设置守护线程会有RuntimeError异常
    t_list.append(t)    # 为了不阻塞后面线程的启动, 不在这里join, 先放到一个列表里
# 每个线程只是实例对象，可以放到列表里，变量而已 没什么特殊的

print(t_list)
for t in t_list:  # 循环列表里所有线程join
    t.join()
hello("t1")
hello("t2")


# current_thread方法返回当前线程的线程对象, active_count方法返回存活的线程数 enumerat方法返回所有存活的进程对象列表
print(threading.current_thread(),threading.active_count())
print("cost",time.time()-start_time)
print("Main thread")
