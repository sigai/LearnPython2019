#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from gevent import monkey; monkey.patch_all()
from gevent.pool import Pool
import gevent
import socket

HOST = 'localhost'  # The remote host
PORT = 8001  # The same port as used by the server


def client(n):
    while True:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((HOST, PORT))

        msg = bytes(f"client {n}", encoding='utf-8')
        s.sendall(msg)
        data = s.recv(1024)
        print(data)

        print('Received', repr(data))
        s.close()

if __name__ == '__main__':
    p = Pool(1000)
    for i in range(10000):
        p.add(gevent.spawn(client, i))
    p.join()
