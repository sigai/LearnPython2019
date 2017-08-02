#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import pika
import sys

# 建立连接通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 定义exchange和类型
channel.exchange_declare(exchange='direct_logs',
                         type='direct')

# 定义routing规则
severity = sys.argv[1] if len(sys.argv) > 2 else 'info'

# 获取消息
message = ' '.join(sys.argv[2:]) or 'Hello World!'

# 开始发消息
channel.basic_publish(exchange='direct_logs',
                      routing_key=severity,
                      body=message)
print(" [x] Sent %r:%r" % (severity, message))

# 关闭连接
connection.close()
