import asyncio
import aiohttp
import time


async def get_page(url):
    async with aiohttp.request('GET', url) as r:
        print(r.status)


if __name__ == '__main__':
    start = time.time()
    loop = asyncio.get_event_loop()
    url = 'http://www.baidu.com'
    tasks = asyncio.gather(*[get_page(url) for i in range(10)])
    loop.run_until_complete(tasks)
    end = time.time()
    print(end-start)
