#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket, os
import hashlib
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
        if not data:
            print("%s已经断开"%addr[0])
            break
        cmd = str(data, encoding='utf-8')
        _, filename = cmd.strip().split()
        print(filename)
        if os.path.isfile(filename):
            file_size = os.stat(filename).st_size
            m = hashlib.md5()
            conn.send(bytes(str(file_size), encoding='utf-8'))  # 发送文件大小信息
            confirm = conn.recv(SIZE)                           # 等待客户端收到文件信息确认
            print("%s%s"%(addr[0],str(confirm, encoding='utf-8')))
            with open(filename, 'rb') as f:
                # 循环发送文件
                for each in f:
                    m.update(each)
                    conn.send(each)
            md5 = m.hexdigest()
            print("MD5:",md5)
            ack = conn.recv(SIZE)
            if str(ack, encoding='utf-8') == 'All Received':
                conn.send(bytes(md5, encoding='utf-8'))
                print("发送完成")

sock.close()
