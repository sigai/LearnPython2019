#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import pika
import sys

# 建立连接和创建通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 声明exchange为topic类型
channel.exchange_declare(exchange='topic_logs',
                         type='topic')

# 获取输入的routingkey和消息
routing_key = sys.argv[1] if len(sys.argv) > 2 else 'anonymous.info'
message = ' '.join(sys.argv[2:]) or 'Hello World!'

# 设置消息类型
channel.basic_publish(exchange='topic_logs',
                      routing_key=routing_key,
                      body=message)
print(" [x] Sent %r:%r" % (routing_key, message))

# 关闭连接
connection.close()
