#RabbitMQ
python模块pika支持RabbitMQ队列. 官网:
http://www.rabbitmq.com/tutorials/tutorial-one-python.html

运行RabbitMQ服务
RabbitMQ服务脚本自动安装到目录 `/usr/local/sbin` 下. 此目录不会自动加到环境变量, 所以需要把路径变量`PATH=$PATH:/usr/local/sbin`加载到终端的配置文件(zsh的配置文件是.zshrc)中, 然后就可以用`rabbitmq-server`命令启动RabbitMQ服务了.
`netstat -nat | grep 5672`

```

tcp4       0      0  *.15672                *.*                    LISTEN
tcp4       0      0  127.0.0.1.5672         *.*                    LISTEN
tcp4       0      0  *.25672                *.*                    LISTEN
```

threading, queue.Queue
multiprocessing, queue

线程队列只能线程之间通信, 进程队列用在进程间通信.
不同的应用程序之间通信就需要第三方队列支持.

RabbitMQ是流行的开源消息队列系统，用erlang语言开发。RabbitMQ是AMQP（高级消息队列协议）的标准实现。如果不熟悉AMQP，直接看RabbitMQ的文档会比较困难。不过它也只有几个关键概念，这里简单介绍。
    Broker：简单来说就是消息队列服务器实体。
　　Exchange：消息交换机，它指定消息按什么规则，路由到哪个队列。
　　Queue：消息队列载体，每个消息都会被投入到一个或多个队列。
　　Binding：绑定，它的作用就是把exchange和queue按照路由规则绑定起来。
　　Routing Key：路由关键字，exchange根据这个关键字进行消息投递。
　　vhost：虚拟主机，一个broker里可以开设多个vhost，用作不同用户的权限分离。
　　producer：消息生产者，就是投递消息的程序。
　　consumer：消息消费者，就是接受消息的程序。
　　channel：消息通道，在客户端的每个连接里，可建立多个channel，每个channel代表一个会话任务。
消息队列的使用过程大概如下：
（1）客户端连接到消息队列服务器，打开一个channel。
　　（2）客户端声明一个exchange，并设置相关属性。
　　（3）客户端声明一个queue，并设置相关属性。
　　（4）客户端使用routing key，在exchange和queue之间建立好绑定关系。
　　（5）客户端投递消息到exchange。
exchange接收到消息后，就根据消息的key和已经设置的binding，进行消息路由，将消息投递到一个或多个队列里。
exchange也有几个类型，完全根据key进行投递的叫做Direct交换机，例如，绑定时设置了routing key为”abc”，那么客户端提交的消息，只有设置了key为”abc”的才会投递到队列。对key进行模式匹配后进行投递的叫做Topic交换机，符号”#”匹配一个或多个词，符号`”*”`匹配正好一个词。例如`”abc.#”`匹配`”abc.def.ghi”`，`”abc.*”`只匹配`”abc.def”`。还有一种不需要key的，叫做Fanout交换机，它采取广播模式，一个消息进来时，投递到与该交换机绑定的所有队列。
RabbitMQ支持消息的持久化，也就是数据写在磁盘上，为了数据安全考虑，我想大多数用户都会选择持久化。消息队列持久化包括3个部分：
　　（1）exchange持久化，在声明时指定durable => 1
　　（2）queue持久化，在声明时指定durable => 1
　　（3）消息持久化，在投递时指定delivery_mode => 2（1是非持久化）
如果exchange和queue都是持久化的，那么它们之间的binding也是持久化的。如果exchange和queue两者之间有一个持久化，一个非持久化，就不允许建立绑定。

consumer端的回调函数格式:
```

consumer_callback(channel, method, properties, body):
    channel: BlockingChannel
    method: spec.Basic.Deliver
    properties: spec.BasicProperties
    body: str or unicode
```
##跨机器需要配置用户密码




##消息丢失
04中处理消息未完成死掉, 会导致消息丢失, 所以要求处理完返回通知, 否则交付下一个consumer处理消息, basic_consume方法中的no_ack参数可设置, 回调函数处理完消息是否通知RabbitMQ Server, 默认为通知, no_ack为True则关闭通知.

05中视频的问题, 队列消息在no_ack默认情况下一直存在的问题, 是因为, 默认状态Server需要通知, RabbitMQ Server收不到通知则不会把数据从队列里删除, 所以需要在consumer的回调函数里, 手动的添加返回给Server的结束通知, `ch.basic_ack(delivery_tag = method.delivery_tag)`添加在回调函数处理消息结束之后, 返回给Server.

##消息持久化
queue_declare方法创建队列的时候, durable参数设置为True持久化队列, 但是队列里的消息不会持久化.
发布消息的时候, 给予消息权限, 可在持久化的队列里保存持久化的数据
basic_publish方法的properties参数传递一个delivery_mode值为2的BasicProperties的实例.

##能力越大责任越大(负载均衡)
消息分发默认是每个consumer一个轮着发送消息(也可以看成是consumer端自己去获取消息), 可以根据consumer处理消息的速度, 收取消息, 需要在consumer端设置channel.basic_qos(prefetch_count=1), consumer当前消息没处理完, 则不收取消息, 当前没有消息在处理才收新的消息.

#消息广播
exchange类型:
fanout(扇出): 所有bind到此类型exchange的队列都可以接收到消息.
direct: 通过routingKey和exchange决定哪个唯一的队列可以接收消息.
topic: 所有符合routingKey(或表达式)的routingKey所bind的队列都可以接收消息.
> 表达式符号:
> `#` 代表一个或者多个字符
> `*` 代表任何字符
headers: 通过headers来决定把消息发给哪些队列


