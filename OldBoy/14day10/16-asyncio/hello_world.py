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

# 把协程注册到事件循环中并启动循环
loop.run_until_complete(coroutine)

print("TIME: ", now() - start)
