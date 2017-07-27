#多线程应用场景
Python多线程不适合CPU操作密集型的任务, 适合io操作密集型任务.
CPU操作密集型的任务应该使用多进程.

#多进程
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
管道(Pipe)也能实现进程间通信

#多进程的数据共享
Manager提供的数据类型已经内部自动加锁处理过, 所以使用的时候不需要再加锁操作.

#进程池
新建一个进程是克隆一份与父进程一样的资源, 启用的进程越多, 开销越大, 所以需要进程池, 限制同时运行的进程数量.
Pool创建进程池对象.
close关闭进程池, 标记进程池的状态, 进程池处理器根据这个状态标记操作池中的进程, 所以不join的话会直接退出, 因为进程池处理器是一个守护线程!
join等待进程池中的进程结束, 断言进程池已经关闭后, 等待进程池中的进程结束.
close应该是禁止新的进程加入进程, 此时进程池只许出不许进, 我党当年游击到一个村子, 封锁村子, 放明暗哨各两个, 全村许进不许出, 完美封锁消息, 此处效果类似. 视频里讲错了, 学生提出的应该是对的.

apply 同步  syn·chro·nous
apply_async 异步 a·syn·chro·nous

apply_async(func=None,args=None,callback=None)
回调函数由主调进程执行
