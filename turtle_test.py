#!/usr/bin/python
# -*- coding: UTF-8 -*-

import math,turtle

bob = turtle.Turtle()
turtle.delay = 0.001

def polygon(t,n,length):
    angle = 360/n
    for i in range(n):
        t.fd(length)
        t.lt(angle)

def circle(t,r):
    circ = 2 * math.pi * r
    n= int(circ/3)+1
    length = circ/n
    polygon(t,n,length)

circle(bob,100)
turtle.mainloop()

