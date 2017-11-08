from eventlet import sleep

def hello():
	sleep(3)
	print('Hello!')

if __name__ == '__main__':
	hello()
