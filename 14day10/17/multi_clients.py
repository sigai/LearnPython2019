#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket

messages = ["梁晓桐最美",
            ]

server_addr = ("192.168.44.143",10000)

socks = [socket.socket(socket.AF_INET, socket.SOCK_STREAM) for i in range(3000)]

for s in socks:
    s.connect(server_addr)

for msg in messages:
    for s in socks:
        print("%s:sending %s"%(s.getsockname(),msg))
        s.send(msg.encode())

    for s in socks:
        data = s.recv(1024)
        print("%s receved %s"%(s.getsockname(),data.decode()))
        if not data:
            print("closing socket",s.getsockname())