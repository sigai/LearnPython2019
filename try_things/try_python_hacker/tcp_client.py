#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
import socket

host = "127.0.0.1"
port = 12345

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client.connect((host, port))

client.send(b"aaaaa")

response = client.recv(4096)

print(str(response, encoding="utf-8"))