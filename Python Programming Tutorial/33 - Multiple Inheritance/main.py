#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''多继承，这个例子很好，一点都不无聊'''
class Mario():

    def move(self):
        print('I am moving')

class Shroom():

    def eat_shroom(self):
        print('How I am big!')

class BigMario(Mario, Shroom):
    pass

bm = BigMario()

bm.move()
bm.eat_shroom()