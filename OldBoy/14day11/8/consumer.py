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

# 创建临时随机队列并获取队列名
result = channel.queue_declare(exclusive=True)
queue_name = result.method.queue

# 获取要接收的bindingkey
binding_keys = sys.argv[1:]

# 输出命令使用方法
if not binding_keys:
    sys.stderr.write("Usage: %s [binding_key]...\n" % sys.argv[0])
    sys.exit(1)

# 循环bindingkey列表, 绑定exchange
for binding_key in binding_keys:
    channel.queue_bind(exchange='topic_logs',
                       queue=queue_name,
                       routing_key=binding_key)

print(' [*] Waiting for logs. To exit press CTRL+C')

# 定义回调函数
def callback(ch, method, properties, body):
    print(" [x] %r:%r" % (method.routing_key, body))

# 声明接收消息的方式和处理消息的方式
channel.basic_consume(callback,
                      queue=queue_name,
                      no_ack=True)

# 开始接消息
channel.start_consuming()
