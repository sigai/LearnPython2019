#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''基类的构造函数中最好不要带有参数'''


class People(object):  # 新式类

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.friends = []

    def eat(self):
        print("eating...")

    def speek(self):
        print("talking...")

    def sleep(self):
        print("Sleeping...")


class Relation(object):
    def make_friends(self, obj):
        print("%s is making friend with %s" % (self.name, obj.name))
        self.friends.append(obj)  # 用实例做关联


class Man(People, Relation):
    def __init__(self, name, age, money):
        super(Man, self).__init__(name, age)  # 优化
        # People.__init__(self,name,age)
        self.money = money
        print("%s have %s $money" % (self.name, self.money))

    def fuck(self):
        print("%s is fucking a girl..." % (self.name))

    def sleep(self):
        People.sleep(self)
        print("Man:%s is sleeping..." % self.name)


class Woman(People):
    def born(self):
        print("%s born a baby..." % self.name)


m1 = Man("Sky", 22, 100)
m1.eat()
m1.speek()
m1.sleep()
m1.fuck()
w1 = Woman("Tongtong", 18)
w1.speek()
w1.sleep()
w1.eat()
w1.born()
m1.make_friends(w1)
w1.name = "Jingjing"
print(m1.friends[0].name)
