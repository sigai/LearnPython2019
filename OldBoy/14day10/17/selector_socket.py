#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import selectors
import socket

sel = selectors.DefaultSelector()

def accept(sock,mask):
    conn, addr = sock.accept()
    #print("accepted",conn,"from",addr,"mask",mask)
    conn.setblocking(False)
    sel.register(conn,selectors.EVENT_READ,read)

def read(conn,mask):
    data = conn.recv(1024)
    if data:
        #print("echoing",repr(data))
        conn.send(data)
    else:
        print("closing",conn)
        sel.unregister(conn)
        conn.close()


sock = socket.socket()
sock.bind(("0.0.0.0",10000))
sock.listen(100)
sock.setblocking(False)

sel.register(sock,selectors.EVENT_READ,accept)

while True:
    events = sel.select()
    for key, mask in events:
        callback = key.data
        callback(key.fileobj, mask)