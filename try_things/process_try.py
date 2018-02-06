#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from tqdm import tqdm
from time import sleep

for i in tqdm(range(10), ascii=True):
    sleep(.5)
