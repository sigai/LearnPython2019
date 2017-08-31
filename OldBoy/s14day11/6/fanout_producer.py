#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pika
import sys

# 创建连接和通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 创建exchange
channel.exchange_declare(exchange='logs',
                         type='fanout')

# 消息
message = ' '.join(sys.argv[1:]) or "info: Hello World!"

# 广播消息给exchange
channel.basic_publish(exchange='logs',
                      routing_key='',
                      body=message)

print(" [x] Sent %r" % message)

# 关闭连接
connection.close()
