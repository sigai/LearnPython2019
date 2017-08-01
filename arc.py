#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import turtle, math
bob = turtle.Turtle()
turtle.delay = 0.001

def arc(t,r,angle):
    arc_length = 2 * math.pi * r * angle / 360
    n = int(arc_length / 3) +1
    step_length = arc_length / n
    step_angle = angle / n

    for i in range(n):
        t.fd(step_length)
        t.lt(step_angle)

arc(bob, 100, 90)
turtle.mainloop()