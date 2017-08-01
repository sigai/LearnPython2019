#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket

c = socket.socket()

# 连接到address处的套接字。一般，address的格式为元组（hostname,port）,如果连接出错，返回socket.error错误。
c.connect(("localhost",6969))

# 同上，只不过会有返回值，连接成功时返回 0 ，连接失败时候返回编码，例如：10061
# sk.connect_ex(address)


c.send("客户端发来的消息".encode('utf-8'))
data = c.recv(1024)
print(data)
c.close()
