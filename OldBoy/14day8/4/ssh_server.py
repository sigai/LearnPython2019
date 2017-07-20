#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket, os

IP = 'localhost'
PORT = 6969
SIZE = 1024

sock = socket.socket()
sock.bind((IP, PORT))
sock.listen(5)

while True:
    conn, addr = sock.accept()
    print("%s上线了"%addr[0])
    while True:
        data = conn.recv(SIZE)
        cmd = str(data, encoding='utf-8')
        print("%s发来了%s命令"%(addr[0], cmd))
        res = os.popen(cmd).read()
        if len(res) == 0:
            conn.send(bytes("命令结果为空", encoding='utf-8'))
        else:
            res_data = bytes(res, encoding='utf-8')
            conn.send(bytes(str(len(res)), encoding='utf-8'))
            conn.send(res_data)
