#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''初始化方法'''


class Tuna:

    def __init__(self):
        print("blrblrblrblr")

    def swim(self):
        print("I am swimming.")

#f = Tuna()
#f.swim()

class Enemy:

    def __init__(self, x):
        self.energy = x

    def show_energy(self):
        print(self.energy)

jason = Enemy(5)
sandy = Enemy(10)

jason.show_energy()
sandy.show_energy()
