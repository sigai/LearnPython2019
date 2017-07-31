#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import asyncio
import time
'''
嵌套协程
'''
now = lambda: time.time()


async def do_some_work(x):
    print('Waiting: ', x)

    await asyncio.sleep(x)
    return 'Done after {}s'.format(x)

async def main():
    coroutine1 = do_some_work(1)
    coroutine2 = do_some_work(2)
    coroutine3 = do_some_work(3)

    tasks = [
        asyncio.ensure_future(coroutine1),
        asyncio.ensure_future(coroutine2),
        asyncio.ensure_future(coroutine3),
    ]

    # 1. 嵌套协程
    # dones, pendings = await asyncio.wait(tasks)

    # for task in tasks:
    #     print("Task ret: ", task.result())


    # 2. 如果使用的是 asyncio.gather创建协程对象，那么await的返回值就是协程运行的结果。
    # results = await asyncio.gather(*tasks)
    #
    # for result in results:
    #     print("Task ret: ", result)


    # 3. 不在main协程函数里处理结果，直接返回await的内容，
    # 那么最外层的run_until_complete将会返回main协程的结果。
    return await asyncio.gather(*tasks)

start = now()

loop = asyncio.get_event_loop()
# loop.run_until_complete(main())
results = loop.run_until_complete(main())

for result in results:
    print("Task ret: ", result)

print("TIME: ", now() - start)
