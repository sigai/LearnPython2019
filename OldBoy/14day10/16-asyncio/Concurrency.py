#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''
Concurrency and parallelism

asyncio.wait(task) 接收task列表
asyncio.gather(*tasks) 接收一堆task
'''
import asyncio
import time

now = lambda: time.time()


async def do_some_work(x):
    print('Waiting: ', x)

    await asyncio.sleep(x)
    return 'Done after {}s'.format(x)


start = now()

coroutine1 = do_some_work(1)
coroutine2 = do_some_work(2)
coroutine3 = do_some_work(3)

tasks = [
    asyncio.ensure_future(coroutine1),
    asyncio.ensure_future(coroutine2),
    asyncio.ensure_future(coroutine3),
]
loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.wait(tasks))

print("TIME:", now() - start)

for task in tasks:
    print("Task ret: ", task.result())

