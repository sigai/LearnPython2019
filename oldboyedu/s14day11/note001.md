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

05中视频的问题, 队列消息在no_ack默认情况下一直存在的问题, 是因为, 默认状态Server需要通知, RabbitMQ Server收不到通知则不会把数据从队列里删除, Server根据consumer的连接中断来确认该消息没有被正确处理, 所以需要在consumer的回调函数里, 手动的添加返回给Server的结束通知, `ch.basic_ack(delivery_tag = method.delivery_tag)`添加在回调函数处理消息结束之后, 返回给Server.

整理:
1. 默认状态no_ack为False, Server收到消息确认才会把消息从队列里删除; 否则, consumer收了消息后连接中断, 且没有发送确认消息的话, Server不会把消息从队列删除, 会发给下一个consumer, 以此类推.
1. ps: 上述情况下, 需要consumer的回调函数最后返回确认消息.
2. no_ack为True, Server在consumer收到消息后就会把消息从队列里删除, 不需要consumer的确认消息. consumer接收后, 消息就与Server无关了.

##消息持久化
queue_declare方法创建队列的时候, durable参数设置为True持久化队列, 但是队列里的消息不会持久化.
发布消息的时候, 给予消息权限, 可在持久化的队列里保存持久化的数据
basic_publish方法的properties参数传递一个delivery_mode值为2的BasicProperties的实例.
持久化的不可靠性:
RabbitMQ需要时间去把这些信息存到磁盘上，这个time window虽然短，但是它的确还是有。在这个时间窗口内如果数据没有保存，数据还会丢失。还有另一个原因就是RabbitMQ并不是为每个Message都做fsync：它可能仅仅是把它保存到Cache里，还没来得及保存到物理磁盘上。

##能力越大责任越大(负载均衡)
消息分发默认是每个consumer一个轮着发送消息(也可以看成是consumer端自己去获取消息),
这种分发机制叫round-robin(轮转) dispatch(循环分发), 但这种分发机制有问题, 可以根据consumer处理消息的速度, 收取消息(Fair dispatch公平分发), 需要在consumer端设置channel.basic_qos(prefetch_count=1), consumer当前消息没处理完, 则不收取消息, 当前没有消息在处理才收新的消息.

##消息广播
`rabbitmqctl list_exchanges` 命令可以列出所有exchange
exchange类型:
fanout(扇出): 所有bind到此类型exchange的队列都可以接收到消息.
direct: 通过routingKey和exchange决定哪个唯一的队列可以接收消息.
topic: 所有符合routingKey(或表达式)的routingKey所bind的队列都可以接收消息.
> 表达式符号:
> `#` 代表一个或者多个字符
> `*` 代表任何字符
headers: 通过headers来决定把消息发给哪些队列

###fanout
Producer需要创建exchange, 发消息给exchange, consumer需要创建exchange, 队列, 并绑定exchange和队列.
1. 创建临时随机队列, 连接关闭时, 队列自动消失:
channel.queue_declare()方法创建随机队列, exclusive参数指定True, 则该队列为临时队列, consumer关闭连接后, 该队列会被删除.
2. 绑定队列和exchange:
channel.queue_bind(exchange='logs',  
                   queue=result.method.queue)
`rabbitmqctl list_bindings` 命令可以列出所有的绑定关系
不绑定的话, 消息会被丢弃.

学到了新知识, 重定向, python命令行执行文件的时候, 用大于号`>` 加文件名, 可以把输出保存到文件中. 所有的命令结果都可以输出到文件中, 只是把本来输出到终端的内容保存到文件而已.

###direct
根据direct exchange绑定的routingkey分发消息, 一个队列可以绑定多个不同的routingkey, 一个routingkey可以绑定不同的队列, exchange和队列通过routingkey关联起来. Producer发送的消息如果没有相应的队列接收, 那么消息会被丢弃.

队列很容易就收不到消息, 不知道为什么, windows的命令提示符, 如果鼠标左键点击选中过, 标题栏有选择两个字的时候就不会输出消息了, 但是list bindings exchange和队列都还在.

###topic
routingkey必须是225个字节内的由`.`号分割的字符表, routingkey有两个特殊字符`*`(代表任意一个单词)和`#`(代表0个或多个单词), 如果bindingkey是`#`可以接所有的消息, 如果这两个特殊符号都没有使用, topic exchange就变成了direct exchange.

思考题:
```

`*`能匹配空routingkey么?
不能
`#.*`能匹配`..`么, 能匹配单个单词么?
能, 一个`.`都能, 能
"a.*.#"跟"a.#"有什么不同
前者能匹配至少两个字段, 后面能匹配最少一个字段a
```

###RPC
Remote Procedure Call Protocol远程过程调用协议，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。
snmp
uuid模块(universally unique identifiers)
`connection.process_data_events(time_limit=0)`
这个方法会确保数据事件都能执行. 阻塞连接和阻塞通道环境中, 如果回调函数没有调用过, 该方法会分发计时器和通道回调函数. 程序会阻塞.
time_limit参数: 浮点类型, 设置处理任务的时间上限. 实际的阻塞时间由底层的IO粒度决定, 参数值为0, 表示尽快返回, None表示无时间限制, 该方法会一直阻塞, 直到IO操作执行动作事件完成. 默认为0, 为了向后兼容.

客户端接口 Client interface
回调函数队列 Callback queue
消息属性 Message properties:
AMQP 预定义了14个属性。它们中的绝大多很少会用到。以下几个是平时用的比较多的：
1. delivery_mode: 持久化一个Message（通过设定值为2）。其他任意值都是非持久化。
2. content_type: 描述mime-type 的encoding。比如设置为JSON编码：设置该property为application/json。
3. reply_to: 一般用来指明用于回调的queue（Commonly used to name a callback queue）。
4. correlation_id: 在请求中关联处理RPC响应（correlate RPC responses with requests）。
相关id Correlation id
首先, 为每个client创建唯一的callback queue, 然后, 对于每个request，都设置唯一的一个值，在收到响应后，通过这个值就可以判断是否是自己的响应。如果不是自己的响应，就不去处理。

RPC工作流程：

当客户端启动时，它创建了匿名的exclusive callback queue.
客户端的RPC请求时将同时设置两个properties： reply_to设置为callback queue；correlation_id设置为每个request一个独一无二的值.
请求将被发送到an rpc_queue queue.
RPC端或者说server一直在等待那个queue的请求。当请求到达时，它将通过在reply_to指定的queue回复一个message给client。
client一直等待callback queue的数据。当message到达时，它将检查correlation_id的值，如果值和它request发送时的一致那么就将返回响应。

现版本的优缺点:
现在这个设计并不是唯一的，但是这个实现有以下优势：
1. 如何RPC server太慢，你可以扩展它:启动另外一个RPC server。
2. 在client端， 无所进行加锁能同步操作，他所作的就是发送请求等待响应。
我们的code还是挺简单的，并没有尝试去解决更复杂和重要的问题，比如：
1. 如果没有server在运行，client需要怎么做？
2. RPC应该设置超时机制吗?
3. 如果server运行出错并且抛出了异常，需要将这个问题转发到client吗？
4. 需要边界检查吗？

#ProtoBuf
一种轻便高效的结构化数据存储格式，可以用于结构化数据串行化，或者说序列化。它很适合做数据存储或 RPC 数据交换格式。可用于通讯协议、数据存储等领域的语言无关、平台无关、可扩展的序列化结构数据格式。目前提供了 C++、Java、Python 三种语言的 API。
它可以作为RabbitMQ的Message的数据格式进行传输，由于是结构化的数据，这样就极大的方便了Consumer的数据高效处理。
