#!/usr/bin/python
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

import socket

IP = 'localhost'
PORT = 6969
SIZE = 1024

c = socket.socket()
c.connect((IP, PORT))

while True:
    cmd = input(">>:").strip()
    if len(cmd)==0:continue
    c.send(bytes(cmd, encoding='utf-8'))

    len_data = c.recv(SIZE)
    len_res = str(len_data, encoding='utf-8')
    print("命令结果长度:%s"%len_res)
    c.send(bytes('收到数据大小:%s'%len_res, encoding='utf-8'))
    received = ""

    while len(received) != int(len_res):
        data = c.recv(SIZE)
        res = str(data,encoding='utf-8')
        received = received + res
        #print(len(received), len_res)
    print(received)
