#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
接收发送多次并支持中文
不能send空 空的话 客户端会卡住
'''
import socket


IP = 'localhost'
PORT = 6969
SIZE = 1024

c = socket.socket()
c.connect((IP, PORT))

f = open("06.mp4", 'wb')
while True:
    msg = input(">>:").strip()
    c.send(bytes(msg, encoding='utf-8'))

    data = c.recv(SIZE*SIZE)# 每次接1M
    # print(str(data, encoding='utf-8'))
    f.write(data)
    f.flush()
f.close()
c.close()
