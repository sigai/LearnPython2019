#多线程应用场景
Python多线程不适合CPU操作密集型的任务, 适合io操作密集型任务.
CPU操作密集型的任务应该使用多进程.

#多进程
多进程的程序必须用main语句做程序入口
multiprocessing模块是用封装os.fork()实现的多进程, 因为windows上没有os.fork, 该多进程模块是模拟的os.fork. 在\*nux平台可以用os.fork实现多进程, 但Windows上不行.

> 在 Windows 上，子进程会自动 import 启动它的这个文件，而在 import 的时候是会执行这些语句的。如果不用main语句写的话就会无限递归创建子进程报错。所以必须把创建子进程的部分用那个 if 判断保护起来，import 的时候 `__name__` 不是 `__main__` ，就不会递归运行了。

解决GIL的问题
multiprocessing.Process(target=None, args=None)
os.getpid()
os.getppid()
跟视频里的输出不一样的原因是这个:
http://www.kaka-ace.com/python-multiprocessing-module-1-context/
Alias for main module -- will be reset by bootstrapping child processes

```
if '__main__' in sys.modules:
    sys.modules['__mp_main__'] = sys.modules['__main__']
```
#多进程的数据传递
进程由系统生成, 子进程由父进程创建, 子进程是独立的, 进程间无法通过线程队列通信.
进程间通信需要用进程队列(用pickle实现)
Queue() 进程队列的方法和线程队列一样:
put
get
qsize
线程队列方法:
'empty', 'full', 'get', 'get_nowait', 'join', 'put', 'put_nowait', 'qsize', 'task_done'
进程队列方法
'cancel_join_thread', Prevent join_thread() from blocking. In particular, this prevents the background thread from being joined automatically when the process exits – see join_thread().
停止join_thread方法的阻塞. 特别是, 这个方法能阻止后台线程在进程退出的时候被自动join-见join_thread方法(就是进程退出的时候不用等后台线程结束了).
这个方法叫allow_exit_without_flush这个名字可能更恰当一些. 这个方法可能导致进程队列中的数据丢失的时候, 你也肯定不需要去用这个方法. 只有一种情况, 当你需要让当前进程马上退出不等待队列数据更新到下层的管道中, 并且可能丢失的数据你也不关心的时候.
'close', 表明当前进程不会再向该队列中put数据了. 后台线程在更新管道数据之后会马上退出. 当进程队列被垃圾回收时, 队列这个方法会立即被调用.
'empty', 'full', 'get', 'get_nowait',
'join_thread', join后台线程(等待后台线程运行结束). 这个方法只能在close方法被调用之后被调用. 该方法可以一直阻塞, 直到后台线程退出, 以保证所有的数据都更新到了管道里.
默认如果进程不是进程队列的创建者, 在退出的时候线程就会join(等待运行结束)进程队列的后台线程. 进程可以调用cancel_join_thread方法让join_thread方法不执行.
'put', 'put_nowait', 'qsize'
*官方文档说, 进程队列比线程队列多的几个方法, 不常用. 并且线程队列的这些方法需要主机支持信号量的实现*
管道(Pipe)也能实现进程间通信
pipe([duplex])方法返回一对儿代表pipe两端的连接对象.
如果duplex(双相)参数是True(默认), 那么管道就是双向的(两端皆可收发). 否则, 连接1只能用来收信, 连接2只能发信.
管道两端连接对象可用的方法:
'close', 关闭连接. 管道被垃圾回收的时候该方法自动执行.
'closed',
'fileno', 返回文件描述符或者连接使用的处理器.
'poll([timeout])', 返回管道中是否有可读的数据. 如果timeout参数没有指定, 方法会立即返回结果. 如果timeout参数是一个数值, 则指定了会阻塞的最长时间的秒数. 如果timeout参数被指定为None, 表示永远阻塞.
注意, 用multiprocessing.connection.wait方法的多端连接对象可以poll立即返回结果.
'readable',
'recv', 返回另一端用send方法发送过来的对象. 方法会一直阻塞直到接收到数据. 如果收不到数据, 或者另一端关闭会触发EOFError异常.
'recv_bytes', 'recv_bytes_into',
'send', 发送对象到连接的另一端, 另一端用recv方法接收. 发送的对象必须是可以pickle序列化的. 过大的pickle文件可能触发ValueError异常(大约32MB以上).
'send_bytes', 'writable'
Changed in version 3.3: Connection objects themselves can now be transferred between processes using Connection.send() and Connection.recv().

> 3.3版本更改: 连接端对象可以通过连接端send和recv方法传输对象本身.
> 3.3版本新增: 连接端对象实现了上下文管理协议. (可以用with语句了, 实现了__exit__和__enter__方法)
> 警告: 连接端的recv方法会自动反pickle序列化收到的数据, 除非你信任发送消息的进程, 否则数据可能有安全风险.
> 因此, 如果连接端不是用pipe创建的话, 你需要进行某种认证之后才使用recv和send方法, 参见[Authentication keys](https://docs.python.org/3.6/library/multiprocessing.html#multiprocessing-auth-keys).
> 又一个警告: 如果进程在管道中读或者写的时候被终止, 管道中的数据就损坏了, 因为无法判断消息的边界大小.

#多进程的数据共享
https://docs.python.org/3.6/library/multiprocessing.html#managers
Manager提供的数据类型已经内部自动加锁处理过, 所以使用的时候不需要再加锁操作.
Manager提供一个方法创建可以在进程间共享的数据, 包括同一个网络中不同主机上运行的进程间的共享. manager对象控制一个管理共享对象的进程. 其他进程可以使用代理访问共享的对象.
Manager类创建一个启动了的SyncManager对象, 可以用来进程间共享数据对象的. 创建的manager对象相当于产生一个子进程, 这个子进程的方法可以创建共享对象并返回相应的代理.
Manager支持with语句创建对象.

#进程锁
一加上进程锁, 程序就变成串行的了.
终端打印的时候, 保证输出结果不会混乱.

#进程池
新建一个进程是克隆一份与父进程一样的资源, 启用的进程越多, 开销越大, 所以需要进程池, 限制同时运行的进程数量.
Pool创建进程池对象.
close关闭进程池, 标记进程池的状态, 进程池处理器根据这个状态标记操作池中的进程, 所以不join的话会直接退出, 因为进程池处理器是一个守护线程!
join等待进程池中的进程结束, 断言进程池已经关闭后, 等待进程池中的进程结束.
close应该是禁止新的进程加入进程, 此时进程池只许出不许进, 我党当年游击到一个村子, 封锁村子, 放明暗哨各两个, 全村许进不许出, 完美封锁消息, 此处效果类似. 视频里讲错了, 学生提出的应该是对的.

apply 同步串行  syn·chro·nous
apply_async 异步并行 a·syn·chro·nous

apply_async(func=None,args=None,callback=None)
回调函数由主调进程执行

[官方文档](https://docs.python.org/3.6/library/multiprocessing.html#module-multiprocessing.pool):
创建一个进程池, 执行用Pool类提交的任务.
`class multiprocessing.pool.Pool([processes[, initializer[, initargs[, maxtasksperchild[, context]]]]])`
A process pool object which controls a pool of worker processes to which jobs can be submitted. It supports asynchronous results with timeouts and callbacks and has a parallel map implementation.
进程池对象控制一个池子的可以执行任务的工作进程. 进程池对象支持异步,超时和回调, 还有并行映射实现.
processes is the number of worker processes to use. If processes is None then the number returned by os.cpu_count() is used.
processes参数设定的是工作进程能使用的进程数量. 如果processes参数是None, 会自动调用os.cpu_count方法返回的数值.
If initializer is not None then each worker process will call initializer(\*initargs) when it starts.
如果initializer参数不是None, 每个工作进程都会在启动的时候调用initializer(\*initargs).
maxtasksperchild is the number of tasks a worker process can complete before it will exit and be replaced with a fresh worker process, to enable unused resources to be freed. The default maxtasksperchild is None, which means worker processes will live as long as the pool.
maxtasksperchild参数是工作进程在退出并被新的工作进程取代之前可以执行完成的任务数量, 使无用的资源被释放. 默认值为None, 工作进程会跟进程池一起存活.
context can be used to specify the context used for starting the worker processes. Usually a pool is created using the function multiprocessing.Pool() or the Pool() method of a context object. In both cases context is set appropriately.
context参数可以用来指定用来启动工作进程的上下文, 一般进程池都是用Pool函数或者Pool上下文对象方法创建的. 两种情况的上下文都恰当的设置了.
Note that the methods of the pool object should only be called by the process which created the pool.
注意了, 进程池对象的方法只能创建进程池的进程去调用.

#协程
coroutine
