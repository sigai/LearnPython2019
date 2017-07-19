#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket


IP = 'localhost'
PORT = 6969
SIZE = 1024

s = socket.socket()
s.bind((IP, PORT))
s.listen(5)

conn, addr = s.accept()
print(conn)
data = conn.recv(SIZE)
print(str(data, encoding='utf-8'))

conn.send(bytes('World Fuck', encoding='utf-8'))

conn.close()
