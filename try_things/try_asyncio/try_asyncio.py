import asyncio

async def main(i):
    print(i, 'sleep')
    await asyncio.sleep(1)
    print(i, 'wake up')


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    tasks = asyncio.gather(*[main(i) for i in range(10)])
    loop.run_until_complete(tasks)
    