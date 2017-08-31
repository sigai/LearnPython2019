#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
服务器已经全部发出了
客户端没有收全
所以需要第四节中讲到的先发送确认数据量再传数据.
'''

import socket

IP = 'localhost'
PORT = 6969
SIZE = 1024

c = socket.socket()
c.connect((IP, PORT))

while True:
    cmd = input(">>:").strip()
    if len(cmd)==0:continue
    c.send(bytes(cmd, encoding='utf-8'))

    res = c.recv(SIZE)

    print(str(res, encoding='utf-8'))
