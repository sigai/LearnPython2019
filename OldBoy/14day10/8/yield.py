#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


def consumer(name):
    print("--->start eating baozi")
    while True:
        new_baozi = yield
        print("[%s] is eating baozi [%s]"%(name,new_baozi))


def producer():
    r = con1.__next__()
    r = con2.__next__()
    n = 0
    while n < 5:
        n += 1
        con1.send(n)
        con2.send(n)
        print("\033[32;1m[producer]\033[0m is making baozi %s"%n)

if __name__ == "__main__":
    con1 = consumer("c1")
    con2 = consumer("c2")
    p = producer()
