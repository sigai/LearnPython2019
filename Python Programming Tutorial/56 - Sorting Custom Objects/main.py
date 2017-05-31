#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''排序自定义对象'''

from operator import attrgetter


class User(object):
    def __init__(self, x, y):
        self.name = x
        self.user_id = y

    def __repr__(self):
        return self.name + ":" + str(self.user_id)


users = {
    User("jone", 40),
    User("tomy", 1),
    User("jack", 24),
    User("jane", 47),
    User("blue", 32),
    User("joby", 15)
}

for user in users:
    print(user)

print("-" * 10)

for user in sorted(users, key=attrgetter("user_id")):
    print(user)
