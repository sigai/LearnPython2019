#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pika


# connection是一个TCP连接Producer和Consumer通过TCP连接到RabbitMQ Server
# 实例化一个ConnectionParameters对象, 传递给连接适配器创建连接.
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost')
)

# 建立消息通道, 数据流动都是在channel中进行的.
# 不直接使用TCP连接传输数据是因为TCP连接的建立和关闭是有代价的, 而channel则不会.
channel = connection.channel()

# Producer和Consumer都需要创建队列
channel.queue_declare(queue='hello')


# subscribe前, 需要声明一个回调函数来处理收到的消息
# 传递的消息都是bytes格式的
def callback(ch, method, properties, body):
    print(ch, method, properties, sep='\n')
    print(" [x] Received %s" % body.decode('utf-8'))    # 网络传输 都是bytes格式

# subscribe
channel.basic_consume(callback,
                      queue='hello',
                      no_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')

# 开始无限循环监听消息
channel.start_consuming()
