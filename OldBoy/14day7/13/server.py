#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket

s = socket.socket()
s.bind(("localhost",6969))
s.listen()
print("我要等消息")
while True:
	conn,addr = s.accept()
	#print(conn,addr)
	data = conn.recv(1024)
	
	print(data.decode())
	conn.send(b"Hello fucker")
s.close()
