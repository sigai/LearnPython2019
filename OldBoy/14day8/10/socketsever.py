#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socketserver


class MyTCPServerHandler(socketserver.BaseRequestHandler):
    def handle(self):
        while True:
            try:
                self.data = self.request.recv(1024).strip()
                print("{} wrote:".format(self.client_address[0]), str(self.data, encoding='utf-8'))
                if not self.data:  # 客户端断开连接
                    print(self.client_address[0], "断开了连接。")
                    break
                self.request.sendall(self.data.upper())
            except ConnectionResetError as e:
                print(e, "客户端断开了连接。")
                break


if __name__ == "__main__":
    host, port = "127.0.0.1", 6969
    server = socketserver.ThreadingTCPServer((host, port), MyTCPServerHandler)
    server.serve_forever()
