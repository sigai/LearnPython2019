#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time
import asyncio

now = lambda : time.time()

# 定义一个协程
async def do_some_work(x):
    print("Waiting: ", x)

start = now()

coroutine = do_some_work(2)

# 创建一个事件循环
loop = asyncio.get_event_loop()
# asyncio.ensure_future方法也能创建一个task
# task = asyncio.ensure_future(coroutine)
# 创建task后, 在加入事件循环之前一直是pending状态
task = loop.create_task(coroutine)
print(task)
# run_until_complete方法参数是一个Future对象, 当传入一个协程时, 其内部会自动将协程封装成task
# task是Future的子类
loop.run_until_complete(task)
print(task)
print("TIME: ", now() - start)
