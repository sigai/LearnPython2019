#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import json
with open('city','r') as f:
	dic = json.load(f)
print(dic)