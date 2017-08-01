#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import json

with open('json','r') as f:
	data = json.load(f)
print(type(data))