#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import sys
from time import sleep
from itertools import cycle

write, flush = sys.stdout.write, sys.stdout.flush

for char in cycle('|/-\\'):
    msg = char + ': Hello world!'
    write(msg)
    flush()
    write('\r'*len(char))
    sleep(.1)
