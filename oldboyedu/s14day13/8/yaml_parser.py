#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from yaml import load, dump
try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Loader, Dumper

l = list(range(10))

d = {"Numbers":l}

with open("test.yml","w") as f:
    dump(d, f)
with open("test.yml","r") as f:
    settings = load(f)

print(settings)
