#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''字典多键排序'''
from operator import itemgetter

users =[
	{'fname': 'bucky', 'lname': 'Roberts'},
	{'fname': 'Tom', 'lname': 'Roberts'},
	{'fname': 'Bernie', 'lname': 'zunks'},
	{'fname': 'Jenna', 'lname': 'Hayes'},
	{'fname': 'Sally', 'lname': 'Jones'},
	{'fname': 'Amanda', 'lname': 'Roberts'},
	{'fname': 'Tom', 'lname': 'Williams'},
	{'fname': 'Dean', 'lname': 'Hayes'},
	{'fname': 'Bernie', 'lname': 'Barbie'},
	{'fname': 'Tom', 'lname': 'Jones'},
	{'fname': 'Sigai', 'lname': 'vipfts'},
]

for x in sorted(users, key=itemgetter('fname')):
	print(x)

print('-'*10)

for x in sorted(users, key=itemgetter('fname','lname')):
	print(x)