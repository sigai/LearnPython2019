#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket

c = socket.socket()
c.connect(("localhost",6969))
c.send("客户端发来的消息".encode('utf-8'))
data = c.recv(1024)
print(data)
c.close()