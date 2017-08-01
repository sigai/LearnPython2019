#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time
import asyncio
import functools

now = lambda : time.time()

# 定义一个协程
async def do_some_work(x):
    print("Waiting: ", x)
    return f"Done after{x}s"

# future参数会在task结束之后接收实参task, 得到任务的结果result, 也就是协程的返回值.

# def callback(future):
#     print("callback: ", future.result())

def callback(t, future):
    print("callback: ", t, future.result())

start = now()

coroutine = do_some_work(2)
loop = asyncio.get_event_loop()
task = asyncio.ensure_future(coroutine)

# 给task绑定回调函数, task结束后, 会把task对象作为参数传给回调函数.
# task.add_done_callback(callback)
task.add_done_callback(functools.partial(callback, 2))

# task结束后, 也就是协程执行结束, 执行回调函数
loop.run_until_complete(task)

# task complete之后可以用result方法, 获取协程返回值
print(task.result())
print("TIME: ", now() - start)
