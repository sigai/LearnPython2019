#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socketserver
import json, os


class MyTCPServerHandler(socketserver.BaseRequestHandler):
    def handle(self):
        while True:
            try:
                print("%s上线了" % self.client_address[0])
                self.data = self.request.recv(1024).strip()
                print(self.data)
                cmd_dict = json.loads(str(self.data, encoding='utf-8'))
                action = cmd_dict['action']
                if hasattr(self, action):
                    func = getattr(self, action)
                    func(cmd_dict)
            except ConnectionResetError as e:
                print(e, "客户端断开了连接。")
                break

    def put(self, *args):

        '''接收客户端上传的文件'''
        cmd_dict = args[0]
        filename = cmd_dict['filename']
        file_size = cmd_dict['size']
        if cmd_dict['overwrite'] is not True:
            filename = filename + ".new"
        self.request.send(b'ready to receive file')

        with open(filename, 'wb') as f:
            received_size = 0
            while received_size < file_size:
                data = self.request.recv(1024)
                f.write(data)
                received_size += len(data)
            else:
                print("%s is uploaded" % filename)


if __name__ == "__main__":
    host, port = "localhost", 6969
    server = socketserver.ThreadingTCPServer((host, port), MyTCPServerHandler)
    server.serve_forever()
