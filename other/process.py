#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

# 9733, 9734
from collections import deque
import sys
from time import sleep

d = deque([9733, 9734, 9733, 9734, 9733, 9734])
HIDE_CURSOR = '\x1b[?25l'
SHOW_CURSOR = '\x1b[?25h'
sys.stdout.write(HIDE_CURSOR)
while 1:
    sys.stdout.write(f"\033[91m{''.join(chr(i) for i in d)}\033[0m")
    sys.stdout.flush()
    sys.stdout.write("\r")
    sys.stdout.flush()
    d.rotate(1)
    sleep(.3)
sys.stdout.write(SHOW_CURSOR)
