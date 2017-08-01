#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket

def Main():
    host = '127.0.0.1'
    port = 5000

    s = socket.socket()
    s.connect((host,port))

    message = input(">>>:")
    while message != 'q':
        s.send(message.encode())
        data = s.recv(1024)
        print("Recieved from server:",data.decode())
        message = input(">>>:")
    s.close()
if __name__ == "__main__":
    Main()