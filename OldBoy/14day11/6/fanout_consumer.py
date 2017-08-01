#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pika

# 创建连接和通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 创建exchange
channel.exchange_declare(exchange='logs',
                         type='fanout')

# 创建唯一队列
result = channel.queue_declare(exclusive=True)
# 获取队列名
queue_name = result.method.queue
print("队列名: ", queue_name)
# 绑定队列到exchange
channel.queue_bind(exchange='logs',
                   queue=queue_name)

print(' [*] Waiting for logs. To exit press CTRL+C')

# 回调函数处理消息
def callback(ch, method, properties, body):
    print(" [x] %r" % body)

# 定义获取消息并处理消息的方式
channel.basic_consume(callback,
                      queue=queue_name,
                      no_ack=True)

# 开始获取消息
channel.start_consuming()
