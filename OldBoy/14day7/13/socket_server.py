#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket
'''
在Ubuntu Server中客户端断开 服务端出现如下错误:

Traceback (most recent call last):
  File "socket_server.py", line 17, in <module>
    conn.send(bytes('没车,滚蛋', encoding='utf-8'))
BrokenPipeError: [Errno 32] Broken pipe

'''

IP = 'localhost'
PORT = 6969
SIZE = 1024

s = socket.socket()
s.bind((IP, PORT))
s.listen(5)
print("等待客户端连接...")
while True:
    conn, addr = s.accept()
    print("%s来了" % addr[0])

    # f = open('05.mp4', 'rb')
    while True:
        data = conn.recv(SIZE)
        if not data:
            print("%s断开..." % addr[0])
            break
        cmd = str(data, encoding='utf-8')
        print("%s执行了%s" % (addr[0], cmd))
        # res = os.popen(cmd).read()
        # conn.sendall(bytes(res, encoding='utf-8'))

        f = open("05.mp4", "rb")
        d = f.read()
        f.close()
        conn.sendall(d)
    # f.close()
s.close()
