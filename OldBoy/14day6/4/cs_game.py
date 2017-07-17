#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

# 类名
class Role(object):
    # 赋值给类的变量, 类变量
    n=123
    name = "Role"
    li = []
    #构造函数: 在实例化时做一些类的初始化的工作
    def __init__(self, name, role, weapon, life_value=100, money=15000):

        #赋给实例的变量为实例变量(静态属性), 作用域是实例本身
        self.name = name
        self.role = role
        self.weapon = weapon
        self.life_value = life_value
        self.money = money
        print(self.name,"生成了")

    # 类的方法(动态属性),功能
    def shot(self):
        print("shooting...")

    def got_shot(self):
        print("%s:ah...,I got shot..." % self.name)

    def buy_gun(self, gun_name):
        print("just bought %s" % gun_name)

print(Role.n, Role.name)
r1 = Role('Alex', 'police', 'AK47')  # 实例化类生成一个对象，并保存到一个变量里。
r1.name = "Tommi"
r1.n = 'changed class attribute'# 其实是添加了新的实例变量
r1.ballproof = True
r1.li.append("r1")
print(r1.n, r1.name, Role.n, Role.name, r1.ballproof, r1.weapon)
del r1.weapon
# print(r1.n, r1.name, Role.name, r1.ballproof, r1.weapon)

r2 = Role('Jack', 'terrorist', 'B22')  # 生成一个角色
r2.name = "Miggy"
print(r2.n, r2.name, Role.n, Role.name)
# Role.shot(r2)
# r1.buy_gun("b43")
# r1.got_shot()
# r2.got_shot()
Role.n = "ABC"
print(r1.li, r2.li, Role.li)