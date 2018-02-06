#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import pika

# 创建连接并创建通道
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# 作为consumer声明队列
channel.queue_declare(queue='rpc_queue')

# 服务端功能函数
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

# 作为consumer的回调函数
def on_request(ch, method, props, body):
    n = int(body)

    print(" [.] fib(%s)" % n)
    response = fib(n)

    # 作为Producer发送消息, 1.直接发送到收到的通道属性中的队列里, 2.发送收到的相关性确认的ID
    ch.basic_publish(exchange='',
                     routing_key=props.reply_to,
                     properties=pika.BasicProperties(
                         correlation_id = props.correlation_id),
                     body=str(response))

    # 此处为收到client端消息的确认, 因为rpc_queue的no_ack是默认设置
    ch.basic_ack(delivery_tag = method.delivery_tag)

# 设置为公平模式, 这里就是处理完当前消息, 才会开始接收下一个消息
channel.basic_qos(prefetch_count=1)

# 声明从队列中获取消息的方式和处理消息的方式
channel.basic_consume(on_request, queue='rpc_queue')

print(" [x] Awaiting RPC requests")

# 开始接收消息
channel.start_consuming()
