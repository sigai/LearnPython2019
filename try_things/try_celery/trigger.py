#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time

from tasks import add

result = add.delay(4, 4)

while not result.ready():
    time.sleep(1)

print("task done:{0}".format(result.get()))
