#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from time import sleep
from progressbar import ProgressBar

bar = ProgressBar()

for i in bar(range(100)):
    sleep(1)
