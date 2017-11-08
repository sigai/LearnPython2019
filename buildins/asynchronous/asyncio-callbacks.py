import asyncio
loop = asyncio.get_event_loop()

def hello():
	loop.call_later(3, print_hello)

def print_hello():
	print('Hello!')
	loop.stop()
	
if __name__ == '__main__':
	loop.call_soon(hello)
	loop.run_forever()
