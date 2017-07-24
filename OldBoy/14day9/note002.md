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
This constructor should always be called with keyword arguments. Arguments are:

*group* should be None; reserved for future extension when a ThreadGroup
class is implemented.

*target* is the callable object to be invoked by the run()
method. Defaults to None, meaning nothing is called.

*name* is the thread name. By default, a unique name is constructed of
the form "Thread-N" where N is a small decimal number.

*args* is the argument tuple for the target invocation. Defaults to ().

*kwargs* is a dictionary of keyword arguments for the target
invocation. Defaults to {}.

If a subclass overrides the constructor, it must make sure to invoke
the base class constructor (Thread.__init__()) before doing anything
else to the thread.

##join()
等待线程结束
Wait until the thread terminates.

This blocks the calling thread until the thread whose join() method is
called terminates -- either normally or through an unhandled exception
or until the optional timeout occurs.

When the timeout argument is present and not None, it should be a
floating point number specifying a timeout for the operation in seconds
(or fractions thereof). As join() always returns None, you must call
isAlive() after join() to decide whether a timeout happened -- if the
thread is still alive, the join() call timed out.

When the timeout argument is not present or None, the operation will
block until the thread terminates.

A thread can be join()ed many times.

join() raises a RuntimeError if an attempt is made to join the current
thread as that would cause a deadlock. It is also an error to join() a
thread before it has been started and attempts to do so raises the same
exception.
##setDeamon()
设置为守护线程
A boolean value indicating whether this thread is a daemon thread.

This must be set before start() is called, otherwise RuntimeError is
raised. Its initial value is inherited from the creating thread; the
main thread is not a daemon thread and therefore all threads created in
the main thread default to daemon = False.

The entire Python program exits when no alive non-daemon threads are
left.
##current_thread()
Return the current Thread object, corresponding to the caller's thread of control.
If the caller's thread of control was not created through the threading
module, a dummy thread object with limited functionality is returned.

##active_count()
Return the number of Thread objects currently alive.

The returned count is equal to the length of the list returned by
enumerate().

##enumerate()
Return a list of all Thread objects currently alive.

The list includes daemonic threads, dummy thread objects created by
current_thread(), and the main thread. It excludes terminated threads and
threads that have not yet been started.

#JIL 全局解释器锁

#lock
互斥锁, 线程锁
Mutex
A lock object is a synchronization primitive.  To create a lock,
call threading.Lock().  Methods are:

acquire() -- lock the lock, possibly blocking until it can be obtained
release() -- unlock of the lock
locked() -- test whether the lock is currently locked

A lock is not owned by the thread that locked it; another thread may
unlock it.  A thread attempting to lock a lock that it has already locked
will block until another thread unlocks it.  Deadlocks may ensue.


#递归锁Rlock
Factory function that returns a new reentrant lock.

A reentrant lock must be released by the thread that acquired it. Once a
thread has acquired a reentrant lock, the same thread may acquire it again
without blocking; the thread must release it once for each time it has
acquired it.

#Semaphore
信号量
Implements a bounded semaphore.

A bounded semaphore checks to make sure its current value doesn't exceed its
initial value. If it does, ValueError is raised. In most situations
semaphores are used to guard resources with limited capacity.

If the semaphore is released too many times it's a sign of a bug. If not
given, value defaults to 1.

Like regular semaphores, bounded semaphores manage a counter representing
the number of release() calls minus the number of acquire() calls, plus an
initial value. The acquire() method blocks if necessary until it can return
without making the counter negative. If not given, value defaults to 1.
