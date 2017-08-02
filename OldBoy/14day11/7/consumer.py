#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import pika
import sys

# 建立连接和通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 声明exchange和类型
channel.exchange_declare(exchange='direct_logs',
                         type='direct')

# 生成临时随机队列
result = channel.queue_declare(exclusive=True)
# 获取队列名
queue_name = result.method.queue

# 获取路由
severities = sys.argv[1:]
if not severities:
    sys.stderr.write("Usage: %s [info] [warning] [error]\n" % sys.argv[0])
    sys.exit(1)

# 遍历路由, 绑定exchange, 队列, 路由
for severity in severities:
    channel.queue_bind(exchange='direct_logs',
                       queue=queue_name,
                       routing_key=severity)

print(' [*] Waiting for logs. To exit press CTRL+C')

# 回调函数
def callback(ch, method, properties, body):
    print(" [x] %r:%r" % (method.routing_key, body))

# 声明获取消息方式和处理方式
channel.basic_consume(callback,
                      queue=queue_name,
                      no_ack=True)

# 开始获取消息
channel.start_consuming()
