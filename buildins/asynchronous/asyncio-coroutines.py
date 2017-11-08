import asyncio
loop = asyncio.get_event_loop()

@asyncio.coroutine
def hello():
	yield from asyncio.sleep(3)
	print('Hello!')
	
if __name__ == '__main__':
	loop.run_until_complete(hello())
