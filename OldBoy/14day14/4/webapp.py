#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import socket
import datetime


def handle_request(client):
    buf = client.recv(1024)
    client.send(bytes("HTTP/1.1 200 OK\r\n\r\n",encoding='utf-8'))
    # client.send(bytes("Hello, Cool Boy", encoding='utf-8'))
    with open('index.html','r', encoding='utf-8') as f:
        client.send(bytes(f.read().replace('@@@@@',str(datetime.datetime.now()))))


def main():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('localhost', 8000))
    sock.listen(5)

    while True:
        connection, address = sock.accept()
        handle_request(connection)
        connection.close()


if __name__ == '__main__':
    main()
