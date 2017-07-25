#多线程
应用程序-->操作系统-->CPU, driver, ROM
最小操作指令单元是线程, 是一堆指令的集合.

1. 进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。在早期面向进程设计的计算机结构中，进程是程序的基本执行实体；在当代面向线程设计的计算机结构中，进程是线程的容器。程序是指令、数据及其组织形式的描述，进程是程序的实体。from https://baike.baidu.com/item/%E8%BF%9B%E7%A8%8B

2. 线程，有时被称为轻量级进程(Lightweight Process，LWP），是程序执行流的最小单元。一个标准的线程由线程ID，当前指令指针(PC），寄存器集合和堆栈组成。另外，线程是进程中的一个实体，是被系统独立调度和分派的基本单位，线程自己不拥有系统资源，只拥有一点儿在运行中必不可少的资源，但它可与同属一个进程的其它线程共享进程所拥有的全部资源。一个线程可以创建和撤消另一个线程，同一进程中的多个线程之间可以并发执行。由于线程之间的相互制约，致使线程在运行中呈现出间断性。线程也有就绪、阻塞和运行三种基本状态。就绪状态是指线程具备运行的所有条件，逻辑上可以运行，在等待处理机；运行状态是指线程占有处理机正在运行；阻塞状态是指线程在等待一个事件（如某个信号量），逻辑上不可执行。每一个程序都至少有一个线程，若程序只有一个线程，那就是程序本身。
线程是程序中一个单一的顺序控制流程。进程内一个相对独立的、可调度的执行单元，是系统独立调度和分派CPU的基本单位指运行中的程序的调度单位。在单个程序中同时运行多个线程完成不同的工作，称为多线程。from https://baike.baidu.com/item/%E7%BA%BF%E7%A8%8B

CPU > 内存 > 硬盘

Pycharm中多线程如果没结束, 手动结束的话, 左边的红色停止键会变成骷髅头.
##threading.Thread
`__init__(self, group=None, target=None, name=None,args=(), kwargs=None, *, daemon=None)`
这个构造方法执行需要关键字参数, 可用的参数如下:
group参数默认为None, 为将来扩展保留的参数.
target参数是将被run方法调用的可调用对象. 默认为None, 表示没有任何调用.
name参数是线程的名字. 默认生成"Thread-N"形式的唯一名字, N是十进制整数.
args参数是给target调用的一个元组参数, 默认是空元组().
kwargs参数是给target调用的一个关键字参数组, 默认是一个空字典{}.
如果子类重写了构造方法, 必须首先执行父类的构造方法`Thread.__init__()`.

##join()
join方法等待线程执行完毕.
join方法会阻塞主调线程, 直到被调用线程执行完毕, 要么正常结束要么报出异常或者等到可选参数超时时间都算结束.
当timeout参数被设置而不是None的时候, 应该设置为浮点数作为超时时间, 并且时间应该确定为几秒钟的操作或者可能是碎片时间. join方法总是返回None, 所以join执行完毕, 需要调用isAlive方法确定超时是否发生,如果线程还在存活, 说明join方法还没有超时.
如果timeout参数没有设置或者为None, join方法会一直阻塞直到线程执行完毕.
一个线程可以被多次join.
如果尝试join当前的主线程, 方法会触发运行时错误, 因为会导致死锁。所以就是死锁的时候会出发RuntimeError异常. 只能在线程外join该线程, 在线程start之前join也会出发同样的异常

多个线程需要join的时候可以把线程放在列表里进行批量管理.

##setDeamon()
设置为守护线程
布尔值表示该线程是否是守护线程.
该方法必须在start方法调用之前设置, 否则会触发RuntimeError异常. 初始值会继承创建线程的线程的值,如果主线程不是守护线程的话, 主线程创建的线程的deamon值默认都是False
整个Python程序会在没有非守护线程存活的时候退出. 也就是程序会等带非守护线程结束, 而不会等待守护线程.

##current_thread()
返回当前线程的对象, 返回给主调控制线程.
如果主调控制线程不是通过threading模块创建的, 就会返回一个具有有限功能的虚拟线程对象.

##active_count()
返回当前活动的线程对象数量.
返回的数量等于enumerate方法返回的列表的长度.

##enumerate()
Return a list of all Thread objects currently alive.
返回当前活动的线程对象的列表
The list includes daemonic threads, dummy thread objects created by
current_thread(), and the main thread. It excludes terminated threads and
threads that have not yet been started.
列表中包括守护线程, current_thread方法创建的虚拟线程对象, 还有主线程. 不包括已经执行完毕的线程和那些还没有启动的线程.


#GIL 全局解释器锁
Global Interpreter Lock
Python的多线程在多核CPU上，只对于IO密集型计算产生正面效果；而当有至少有一个CPU密集型线程存在，那么多线程效率会由于GIL而大幅下降。


#lock
互斥锁, 线程锁
Mutex

lock对象是一个同步原语, 调用threading.Lock方法创建一个锁, 锁有下面的方法:
acquire方法, 把锁锁上, 可能一直阻塞直到锁被释放
release方法, 把锁打开
locked方法, 测试锁当前是否上锁.
锁对象并不是被上锁的对象所拥有, 其他的线程也可以解锁. 尝试给已经上锁的锁再次上锁, 会阻塞直到其他的线程解锁, 可能发生死锁.

#递归锁Rlock
该工厂函数返回一个递归锁(可重入的锁).
递归锁必须被申请他的线程释放. 一旦线程申请了一个递归锁, 该线程可以继续加锁而不会阻塞, 线程必须相应的释放申请到的锁.(申请几次就要释放几次)

#Semaphore
信号量
Semphore，是一种带计数的线程同步机制，当调用release时，增加计算，当acquire时，减少计数，当计数为0时，自动阻塞，等待release被调用。
而在Python中存在两种Semphore，一种就是纯粹的Semphore，还有一种就是BoundedSemaphore。
区别：
Semphore:  在调用release()函数时，不会检查，增加的计数是否超过上限（没有上限，会一直上升）
BoundedSemaphore：在调用release()函数时，会检查，增加的计数是否超过上限，这样就保证了使用的计数
实例化一个限制的信号量对象.
有界信号量检查以确保其当前值不超过其初始值。如果超过了会出发ValueError异常. 多数情况下信号量用限制性能的方法保护资源.
如果信号量被释放了太多次, 就可能有问题. 默认信号量是1.
跟正常的信号量一样,有界信号量管理一个线程计数器, release方法执行就增加计数, acquire方法执行就减少计数, 还会加上初始的值, 有必要的话acquire方法会阻塞直到计数器不会变负数, 默认计数器为1.


#events
Event类实例化Event对象. Event实例管理一个标识(`self._flag`), 用set方法可以将其设置为True, clear方法可以将其设置为False. wait方法可以阻塞线程运行,直到标识变为True. 标识初始值为False.
Event是一个简易的同步对象. Event对象代表一个内部标识, 并且线程们可以等待标识被设定, 或者线程他们自己设定或清空标识.
`event = threading.Event()`
*客户线程可以等待直到标识被设定*
`event.wait()`
*服务线程能够设置或重置标识.*
`event.set()`
`event.clear()`
如果标识是设置状态(True), wait方法不会执行任何操作(等于pass). 如果标识被清除了(False), wait方法会一直阻塞直到标识被再次设定(True). 任何数量的线程都可以等待同一个Event.

#queue
队列可以完成程序的解耦
如果队列maxsize不大于0, 队列大小是无限制的默认为0
queue.Queue()
先入先出队列
queue.LifoQueue()
后入先出队列
queue.PriorityQueue()
优先级队列
put(item, block=True, timeout=None)
向队列中添加元素
put_nowait()
添加元素不阻塞
get(block=True, timeout=None)
从队列中获取元素,并把元素从队列中删除
get_nowait()
获取元素不阻塞, 并把元素从队列中删除
qsize()
获取队列元素数量
empty()
判断队列是否是空队列(非空情况下不可信)
full()
判断队列是否满了(不满的情况下不可靠)
task_done()
表明前一个队列任务完成.
join()
阻塞, 直到队列的所有元素都被获取和处理.
