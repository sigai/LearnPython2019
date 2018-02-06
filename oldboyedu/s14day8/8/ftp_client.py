#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
服务器已经全部发出了
客户端没有收全
所以需要第四节中讲到的先发送确认数据量再传数据.

此处有坑:
对比发送和收到数据,要使用str对比len小,或者全部bytes对比len大小.
视频中Alex的错误就是客户端计算的是bytes的len,服务端计算的是str的len
这个坑是len的坑, len统计的是数据类型中元素的个数. 并不是数据大小.
问题出在有中文, 中文在bytes和str中的len不一样......
'''

import socket, hashlib

IP = 'localhost'
PORT = 6969
SIZE = 1024

c = socket.socket()
c.connect((IP, PORT))

while True:
    cmd = input(">>:").strip()
    if len(cmd)==0:continue
    if cmd.startswith("get"):
        c.send(bytes(cmd, encoding='utf-8'))
        file_size = str(c.recv(SIZE), encoding='utf-8')
        print("文件大小:", file_size)
        c.send(bytes("准备接收文件...", encoding='utf-8'))
        total_size = int(file_size)
        received_size = 0
        _, filename = cmd.strip().split()
        m = hashlib.md5()
        with open(filename + ".new", 'wb') as f:
            while received_size < total_size:
                '''
                解决FTP粘包问题的关键代码块
                '''
                if total_size - received_size > 1024:
                    size = 1024
                else:
                    size = total_size - received_size
                    print(size)
                data = c.recv(size)
                m.update(data)
                received_size += len(data)
                f.write(data)
            else:
                print("接收结束")
                c.send(b'All Received')
        md5_client = m.hexdigest()
        m_server = c.recv(SIZE)
        md5_server = str(m_server, encoding='utf-8')
        if md5_client == md5_server:
            print("验证成功")
