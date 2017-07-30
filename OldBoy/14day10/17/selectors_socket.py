#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import selectors
import socket

'''
这里讲的不是很仔细 需要复习复习
'''
sel = selectors.DefaultSelector()  # 自动选择最优的协程模式.


# 处理接收到的客户端连接请求(第一个参数是客户端传过来的连接, 第二个为读掩码)
def accept(sock, mask):
    conn, addr = sock.accept()  # 建立连接
    # print("accepted", conn, "from", addr, "mask",mask)
    conn.setblocking(False)  # 设置连接为非阻塞IO
    sel.register(conn, selectors.EVENT_READ, read)  # 注册给selectors 监听客户端消息, 如果为可读, 表示客户端来消息了, 调用read函数处理.


# 处理已连接客户端发来的新消息(第一个参数为服务端和该客户端的socket连接对象, 第二个参数为读掩码)
def read(conn, mask):
    data = conn.recv(1024)  # 接收新消息
    if data:  # 如果消息非空
        # print("echoing",repr(data))
        conn.send(data)  # 把消息发送回去
    else:
        print("closing", conn)  # 如果客户端新消息为空, 表示客户端主动断开了连接
        sel.unregister(conn)  # 将客户端从监控字典中删除
        conn.close()  # 断开与该客户端的socket连接


sock = socket.socket()  # 生成socket实例

sock.bind(("0.0.0.0", 9999))  # 绑定主机端口
sock.listen(100)  # 开始监听端口
sock.setblocking(False)  # 设置服务端socket不阻塞

# 监视sock的事件, 有selectors.EVENT_READ活动, 就用accept去处理
sel.register(sock, selectors.EVENT_READ, accept)  # register(文件对象或文件描述符, 事件(读或写), 数据)

while True:
    events = sel.select()  # 没有活动数据会阻塞 直到有活动数据
    for key, mask in events:
        callback = key.data  # 回调函数(根据sock活动返回的处理, register的第三个参数, 这里返回的可能是accept(新的客户端连接)或者read(已连接的客户端来了新消息))
        callback(key.fileobj, mask)  # 调用函数去处理, mask代表的是监视到的活动类型(读或者写, socket的收到数据是读, 发送数据是写)
