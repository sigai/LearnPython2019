#coding:u8
import random

class BingoCage(object):
	"""docstring for BingoCage"""
	def __init__(self, items):
		
		self._items = list(items)
		random.shuffle(self._items)

	def pick(self):
		try:
			return self._items.pop()
		except IndexError as e:
			raise LookupError("pick from empty BingoCage")

	def __call__(self):
		return self.pick()
		