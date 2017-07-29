#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from gevent import socket, monkey; monkey.patch_all()
import socket
import gevent


def server(port):
    s = socket.socket()     # 创建一个socket实例
    s.bind(('0.0.0.0', port))   # 绑定ip, 端口
    s.listen(500)   # 监听

    # 循环接受连接请求
    while True:
        cli, addr = s.accept()  # 等待客户端连接
        gevent.spawn(handle_request, cli)   # 来一个请求启动一个协程, 由handle_request方法处理所有请求


# 处理已经连接的客户端发来的请求
def handle_request(conn):
    try:
        # 循环处理请求
        while True:
            data = conn.recv(1024)  # 接收数据
            print("recv:", data)    #打印收到的数据
            conn.send(bytes("Hello "+repr(data), encoding='utf-8'))     # echo客户端消息, repr返回对象的字符串形式
            if not data:
                ''' shutdown(flag)
        
                    Shut down the reading side of the socket (flag == SHUT_RD), the writing side
                    of the socket (flag == SHUT_WR), or both ends (flag == SHUT_RDWR).'''
                conn.shutdown(socket.SHUT_WR)   # 没有数据断开连接

    except Exception as ex:
        print(ex)
        pass
    finally:
        conn.close()


if __name__ == '__main__':
    server(8001)
