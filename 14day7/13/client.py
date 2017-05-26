#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket

c = socket.socket()
c.connect(("localhost",6969))
while True:
	msg = input(">>:").strip()
	c.send(msg.encode('utf-8'))
	data = c.recv(1024)
	print(data)
c.close()