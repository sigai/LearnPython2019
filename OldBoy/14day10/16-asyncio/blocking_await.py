#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time
import asyncio
'''
sleep的时候await让出控制权, 以便loop调用其他的协程.
协程的目的是让IO操作异步化
'''
now = lambda : time.time()

async def do_some_work(x):
    print("Waiting: ", x)
    await asyncio.sleep(x)      # 模拟IO操作
    return f"Done after{x}s"

start = now()

coroutine = do_some_work(2)
loop = asyncio.get_event_loop()
task = asyncio.ensure_future(coroutine)
loop.run_until_complete(task)

print(task.result())
print("TIME: ", now() - start)
