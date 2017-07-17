#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

class Animal(object):

    def __init__(self,name):
        self.name = name

    @staticmethod
    def talk(obj):
        obj.talk()

class Cat(Animal):

    def talk(self):
        print(self.name,'Mew~Mew~!')

class Dog(Animal):

    def talk(self):
        print(self.name,"wolf~wolf!")

c = Cat("cat")
c.talk()

d = Dog("dog")
d.talk()

Animal.talk(c)
Animal.talk(d)
