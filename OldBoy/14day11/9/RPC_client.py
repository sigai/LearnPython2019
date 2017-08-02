#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import pika
import uuid


# 将整个RPC过程打包成一个类
class FibonacciRpcClient(object):
    '''
    初始化: 1.建立连接, 2.建立通道, 3.创建临时随机队列(应该是用于传输命令的执行结果的)
    '''

    def __init__(self):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))

        self.channel = self.connection.channel()

        result = self.channel.queue_declare(exclusive=True)
        self.callback_queue = result.method.queue

        # 声明收取消息和处理消息的方式
        self.channel.basic_consume(self.on_response,    # 回调函数, 处理返回的消息
                                   no_ack=True,
                                   queue=self.callback_queue)

    # 处理返回消息的方法
    def on_response(self, ch, method, props, body):
        # 确认消息是否匹配当前命令
        if self.corr_id == props.correlation_id:
            self.response = body

    # 发送命令和接收消息的方法
    def call(self, n):

        # 初始化返回结果
        self.response = None
        # 生成唯一ID
        self.corr_id = str(uuid.uuid4())

        # 开始发送命令: (此时client为Producer所以不用创建队列)
        # 1.直接发送到routing_key的队列中, 2.声明通道属性(指明返回结果的routing_key即队列名, 和配对的唯一ID用来核对相对应的命令)
        self.channel.basic_publish(exchange='',
                                   routing_key='rpc_queue',
                                   properties=pika.BasicProperties(reply_to=self.callback_queue,
                                       # 相关性验证的ID用通道属性传递, 保证返回的结果和发送的命令是相关的
                                       correlation_id=self.corr_id, ),
                                   body=str(n))
        # 如果返回结果为空, 则一直询问结果
        while self.response is None:
            self.connection.process_data_events()   # 收取消息
        # 有结果返回给call方法
        return int(self.response)


# 实例化
fibonacci_rpc = FibonacciRpcClient()

print(" [x] Requesting fib(30)")

# 调用对象的call方法, 获得执行结果
response = fibonacci_rpc.call(30)
print(" [.] Got %r" % response)
