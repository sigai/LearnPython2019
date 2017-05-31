#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from multiprocessing import Process, Pipe

def f(conn):
    conn.send("Message 1")
    conn.send("Message 2")
    conn.send("Message 3")
    print(conn.recv())
    conn.close()

if __name__ =="__main__":
    parent_conn, child_conn = Pipe()
    p = Process(target=f,args=(child_conn,))
    p.start()
    print(parent_conn.recv())
    print(parent_conn.recv())
    print(parent_conn.recv())
    parent_conn.send("Message from father")
    p.join()