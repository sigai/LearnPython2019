#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import socket, hashlib, os, json

IP = 'localhost'
PORT = 6969
SIZE = 1024


class FtpClient(object):

    def __init__(self):
        self.client = socket.socket()

    def connect(self, ip, port):
        self.client.connect((ip, port))

    def interactive(self):
        self.authenticate()
        while True:
            cmd = input(">>:").strip()
            if len(cmd) == 0: continue
            cmd_str, params = cmd.split()
            if hasattr(self, "cmd_%s" % cmd_str):
                func = getattr(self, "cmd_%s" % cmd_str)
                func(cmd)

    def help(self):
        msg = """
        ls
        cd <path>
        pwd
        get <filename>
        put <filename>
        """
        print(msg)

    def cmd_put(self, *args):
        cmd_split = args[0].split()
        if len(cmd_split) > 1:
            filename = cmd_split[1]
            if os.path.isfile(filename):
                file_size = os.stat(filename).st_size
                file_info = {
                    'action': 'put',
                    'filename': filename,
                    'size': file_size,
                    'overwrite': False,
                }
                self.client.send(bytes(json.dumps(file_info), encoding='utf-8'))

                server_res = self.client.recv(SIZE)
                with open(filename, 'rb') as f:
                    for each in f:
                        self.client.send(each)
                    else:
                        print("send complete")
            else:
                print(filename, " is not exist")
        else:
            self.help()

    def get(self):
        pass

    def authenticate(self):
        pass

if __name__ == '__main__':

    ftp = FtpClient()
    ftp.connect(IP, PORT)
    ftp.interactive()
