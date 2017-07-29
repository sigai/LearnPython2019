#论事件驱动与异步IO
通常，我们写服务器处理模型的程序时，有以下几种模型：
（1）每收到一个请求，创建一个新的进程，来处理该请求；
（2）每收到一个请求，创建一个新的线程，来处理该请求；
（3）每收到一个请求，放入一个事件列表，让主进程通过非阻塞I/O方式来处理请求.(协程)
上面的几种方式，各有千秋，
第（1）中方法，由于创建新的进程的开销比较大，所以，会导致服务器性能比较差,但实现比较简单。
第（2）种方式，由于要涉及到线程的同步，有可能会面临死锁等问题。
第（3）种方式，在写应用程序代码时，逻辑比前面两种都复杂。
综合考虑各方面因素，一般普遍认为第（3）种方式是大多数网络服务器采用的方式
 
看图说话讲事件驱动模型

在UI编程中，常常要对鼠标点击进行相应，首先如何获得鼠标点击呢？
方式一：创建一个线程，该线程一直循环检测是否有鼠标点击，那么这个方式有以下几个缺点：
1. CPU资源浪费，可能鼠标点击的频率非常小，但是扫描线程还是会一直循环检测，这会造成很多的CPU资源浪费；如果扫描鼠标点击的接口是阻塞的呢？
2. 如果是堵塞的，又会出现下面这样的问题，如果我们不但要扫描鼠标点击，还要扫描键盘是否按下，由于扫描鼠标时被堵塞了，那么可能永远不会去扫描键盘；
3. 如果一个循环需要扫描的设备非常多，这又会引来响应时间的问题；
所以，该方式是非常不好的。

方式二：就是事件驱动模型
目前大部分的UI编程都是事件驱动模型，如很多UI平台都会提供onClick()事件，这个事件就代表鼠标按下事件。事件驱动模型大体思路如下：
1. 有一个事件（消息）队列；
2. 鼠标按下时，往这个队列中增加一个点击事件（消息）；
3. 有个循环，不断从队列取出事件，根据不同的事件，调用不同的函数，如onClick()、onKeyDown()等；
4. 事件（消息）一般都各自保存各自的处理函数指针，这样，每个消息都有独立的处理函数；

`事件源->注册到事件队列 ->提取任务交给 -> 处理线程`

事件驱动编程是一种编程范式，这里程序的执行流由外部事件来决定。它的特点是包含一个事件循环，当外部事件发生时使用回调机制来触发相应的处理。另外两种常见的编程范式是（单线程）同步以及多线程编程。

让我们用例子来比较和对比一下单线程、多线程以及事件驱动编程模型。下图展示了随着时间的推移，这三种模式下程序所做的工作。这个程序有3个任务需要完成，每个任务都在等待I/O操作时阻塞自身。阻塞在I/O操作上所花费的时间已经用灰色框标示出来了。

单线程, 多线程, 异步


在单线程同步模型中，任务按照顺序执行。如果某个任务因为I/O而阻塞，其他所有的任务都必须等待，直到它完成之后它们才能依次执行。这种明确的执行顺序和串行化处理的行为是很容易推断得出的。如果任务之间并没有互相依赖的关系，但仍然需要互相等待的话这就使得程序不必要的降低了运行速度。

在多线程版本中，这3个任务分别在独立的线程中执行。这些线程由操作系统来管理，在多处理器系统上可以并行处理，或者在单处理器系统上交错执行。这使得当某个线程阻塞在某个资源的同时其他线程得以继续执行。与完成类似功能的同步程序相比，这种方式更有效率，但程序员必须写代码来保护共享资源，防止其被多个线程同时访问。多线程程序更加难以推断，因为这类程序不得不通过线程同步机制如锁、可重入函数、线程局部存储或者其他机制来处理线程安全问题，如果实现不当就会导致出现微妙且令人痛不欲生的bug。

在事件驱动版本的程序中，3个任务交错执行，但仍然在一个单独的线程控制中。当处理I/O或者其他昂贵的操作时，注册一个回调到事件循环中，然后当I/O操作完成时继续执行。回调描述了该如何处理某个事件。事件循环轮询所有的事件，当事件到来时将它们分配给等待处理事件的回调函数。这种方式让程序尽可能的得以执行而不需要用到额外的线程。事件驱动型程序比多线程程序更容易推断出行为，因为程序员不需要关心线程安全问题。

当我们面对如下的环境时，事件驱动模型通常是一个好的选择：

程序中有许多任务，而且…
任务之间高度独立（因此它们不需要互相通信，或者等待彼此）而且…
在等待事件到来时，某些任务会阻塞。
当应用程序需要在任务间共享可变的数据时，这也是一个不错的选择，因为这里不需要采用同步处理。

网络应用程序通常都有上述这些特点，这使得它们能够很好的契合事件驱动编程模型。
此处要提出一个问题，就是，上面的事件驱动模型中，只要一遇到IO就注册一个事件，然后主程序就可以继续干其它的事情了，只到io处理完毕后，继续恢复之前中断的任务，这本质上是怎么实现的呢？

#IO多路复用
内存分为内核空间(内核缓冲区)和用户空间
数据在内核空间为内核态, 进入用户空间后为用户态.
Select\Poll\Epoll异步IO　
http://www.cnblogs.com/alex3714/p/4372426.html　

番外篇 http://www.cnblogs.com/alex3714/articles/5876749.html 



- 用户空间和内核空间(虚拟空间)
- 进程切换
- 进程的阻塞
- 文件描述符
- 缓存 I/O

#IO模式
对于一次IO访问（以read举例），数据会先被拷贝到操作系统内核的缓冲区中，然后才会从操作系统内核的缓冲区拷贝到应用程序的地址空间。所以说，当一个read操作发生时，它会经历两个阶段：
1. 等待数据准备 (Waiting for the data to be ready)
2. 将数据从内核拷贝到进程中 (Copying the data from the kernel to the process)

正式因为这两个阶段，linux系统产生了下面五种网络模式的方案:

- 阻塞I/O
- 非阻塞I/O
- I/O多路复用(事件驱动)
- 信号驱动
- 异步I/O
注：由于signal driven IO在实际中并不常用，所以我这只提及剩下的四种IO Model。

阻塞 I/O（blocking IO）
blocking IO的特点就是在IO执行的两个阶段都被block了。

非阻塞 I/O（nonblocking IO）
nonblocking IO的特点是用户进程需要不断的主动询问kernel数据好了没有。

I/O 多路复用（ IO multiplexing）
I/O 多路复用的特点是通过一种机制一个进程能同时等待多个文件描述符，而这些文件描述符（套接字描述符）其中的任意一个进入读就绪状态，select()函数就可以返回。

异步 I/O(asynchronous IO)

总结:
blocking和non-blocking的区别

调用blocking IO会一直block住对应的进程直到操作完成，而non-blocking IO在kernel还准备数据的情况下会立刻返回。

synchronous IO和asynchronous IO的区别

在说明synchronous IO和asynchronous IO的区别之前，需要先给出两者的定义。POSIX的定义是这样子的：
- A synchronous I/O operation causes the requesting process to be blocked until that I/O operation completes;
- An asynchronous I/O operation does not cause the requesting process to be blocked;

两者的区别就在于synchronous IO做”IO operation”的时候会将process阻塞。按照这个定义，之前所述的blocking IO，non-blocking IO，IO multiplexing都属于synchronous IO。

有人会说，non-blocking IO并没有被block啊。这里有个非常“狡猾”的地方，定义中所指的”IO operation”是指真实的IO操作，就是例子中的recvfrom这个system call。non-blocking IO在执行recvfrom这个system call的时候，如果kernel的数据没有准备好，这时候不会block进程。但是，当kernel中数据准备好的时候，recvfrom会将数据从kernel拷贝到用户内存中，这个时候进程是被block了，在这段时间内，进程是被block的。

而asynchronous IO则不一样，当进程发起IO 操作之后，就直接返回再也不理睬了，直到kernel发送一个信号，告诉进程说IO完成。在这整个过程中，进程完全没有被block。


#I/O 多路复用之select、poll、epoll详解

http://www.cnblogs.com/alex3714/p/4372426.html

异步IO, 系统支持的不好, 用的很少, 用的epoll比较多, Python3中支持异步IO的模块`asyncio`.

##select
https://docs.python.org/3.6/library/select.html
This module supports asynchronous I/O on multiple file descriptors.

IMPORTANT NOTICE
On Windows, only sockets are supported; on Unix, all file descriptors.

`select(rlist, wlist, xlist[, timeout]) -> (rlist, wlist, xlist)`
    
Wait until one or more file descriptors are ready for some kind of I/O.
The first three arguments are sequences of file descriptors to be waited for:
rlist -- wait until ready for reading
wlist -- wait until ready for writing
xlist -- wait for an ``exceptional condition''
If only one kind of condition is required, pass [] for the other lists.
A file descriptor is either a socket or file object, or a small integer
gotten from a fileno() method call on one of those.
    
The optional 4th argument specifies a timeout in seconds; it may be
a floating point number to specify fractions of seconds.  If it is absent
or None, the call will never time out.
    
The return value is a tuple of three lists corresponding to the first three
arguments; each contains the subset of the corresponding file descriptors
that are ready.
    
> IMPORTANT NOTICE 
On Windows, only sockets are supported; on Unix, all file
descriptors can be used.

##selector
https://docs.python.org/3.6/library/selectors.html
This module allows high-level and efficient I/O multiplexing, built upon the
`select` module primitives.

Choose the best implementation, roughly:
   epoll|kqueue|devpoll > poll > select.
select() also can't accept a FD > FD_SETSIZE (usually around 1024)

###BaseSelector
Selector abstract base class.

A selector supports registering file objects to be monitored for specific
I/O events.

A file object is a file descriptor or any object with a `fileno()` method.
An arbitrary object can be attached to the file object, which can be used
for example to store context information, a callback, etc.

A selector can use various implementations (select(), poll(), epoll()...)
depending on the platform. The default `Selector` class uses the most
efficient implementation on the current platform.

###register
Register a file object.

Parameters:
fileobj -- file object or file descriptor
events  -- events to monitor (bitwise mask of EVENT_READ|EVENT_WRITE)
data    -- attached data

Returns:
SelectorKey instance

Raises:
ValueError if events is invalid
KeyError if fileobj is already registered
OSError if fileobj is closed or otherwise is unacceptable to
      the underlying system call (if a system call is made)

Note:
OSError may or may not be raised

#补充
视频中出现的`OSError: [Errno 98] Address already in use`异常的原因和解决方法:

因为socket默认不支持地址复用，如果要复用需要显示设定，即在绑定前调用setsockop函数, 让套接字允许地址重用：socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)


更改Linux文件描述符的限制命令:
ulimit -SHn 65535



