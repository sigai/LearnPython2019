#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket
import select
import queue

server = socket.socket()

server.bind(("localhost",9000))
server.listen(1000)

server.setblocking(False)

inputs = [server]
outputs = []
msg_dict = {}

while True:
    readable,writeable,exceptions = select.select(inputs, outputs, inputs)
    print(readable,writeable,exceptions)
    for r in readable:
        if r is server:
            conn, addr = server.accept()
            msg_dict[conn]= queue.Queue()
            print("来了新链接",addr)
            inputs.append(conn)#客户端未发数据就会收到错误，所以也要用select监控
        else:
            data = r.recv(1024)
            print("收到数据",data)
            msg_dict[r].put(data)
            outputs.append(r)#放入返回的连接队列

    for w in writeable:
        data_new = msg_dict[w].get()
        w.send(data_new)
        outputs.remove(w)#确保下次不再返回已处理完的连接

    for e in exceptions:
        if e in outputs:
            outputs.remove(e)
        inputs.remove(e)
        del msg_dict[e]