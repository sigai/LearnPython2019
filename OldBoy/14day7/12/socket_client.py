#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket


IP = 'localhost'
PORT = 6969
SIZE = 1024

c = socket.socket()
c.connect((IP, PORT))

c.send(bytes('Hello World', encoding='utf-8'))

data = c.recv(SIZE)
print(str(data, encoding='utf-8'))
c.close()
