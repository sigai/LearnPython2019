#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
import socket

host = "127.0.0.1"
port = 9999

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

client.sendto(b"aaaa", (host, port))

response, addr = client.recvfrom(4096)

print(str(response, encoding="utf-8"))