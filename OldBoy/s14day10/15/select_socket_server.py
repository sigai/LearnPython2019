#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket
import select
import queue

server = socket.socket()    # 创建socket实例

server.bind(("localhost",9000))     # 绑定主机和端口
server.listen(1000)                 # 监听端口

server.setblocking(False)           # 设置为非阻塞I/O

inputs = [server]   # select监测列表
outputs = []
msg_dict = {}

while True:
    readable,writeable,exceptions = select.select(inputs, outputs, inputs)      # select是个高阶函数
    print(readable,writeable,exceptions)
    for r in readable:
        if r is server:     # 代表来了一个新的连接
            conn, addr = server.accept()
            msg_dict[conn]= queue.Queue()   # 因为过来的连接r不是跟客户端的socket对象, 所以要用conn这个socket对象做key.
            print("来了新链接",addr)
            inputs.append(conn)     # 因为新连接的客户端还未发数据, 如果此时recv就会收到错误，所以也要用select监控, 当客户端
                                    # 发消息的时候select会返回这个客户端连接的socket对象
        else:
            data = r.recv(1024)     #代表已经连接的客户端发来了消息
            print("收到数据",data)
            msg_dict[r].put(data)
            outputs.append(r)   # 放入返回的连接队列

    # 消息处理
    for w in writeable:
        data_new = msg_dict[w].get()
        w.send(data_new)
        outputs.remove(w)   # 确保下次不再返回已处理完的连接

    # 异常处理
    for e in exceptions:
        if e in outputs:
            outputs.remove(e)
        inputs.remove(e)
        del msg_dict[e]
