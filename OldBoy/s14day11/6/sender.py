#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pika
import time
# 建立TCP连接, 连接对象的channel方法建立channel
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Producer和Consumer都应该创建queue
channel.queue_declare(
    queue='hello',
    durable=True,  # 队列持久化了, 但是队列里的消息没有
)


now = time.ctime
# Producer只能发送消息到exchange, 默认为空即可发送到指定queue, routing_key就是queue的名字
channel.basic_publish(
            exchange='',
            routing_key='hello',
            body=now(),
            properties=pika.BasicProperties(delivery_mode=2, ), # 持久化队列消息
)

print(" [x] Sent Now!")

# 关闭连接
connection.close()
