#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


import socketserver


class MyHandler(socketserver.BaseRequestHandler):

    def handle(self):
        conn = self.request
        while True:
            data = conn.recv(1024)
            print(data.decode('utf-8'))
            if data.decode('utf-8') == 'q':
                break
            conn.send(data)

s1 = socketserver.ThreadingTCPServer(("localhost", 6969), MyHandler)
s1.serve_forever()