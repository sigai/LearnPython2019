#!/usr/bin/env python
# -*- coding: UTF-8 -*-

f = open('yesterday',mode='r',encoding='utf-8')
t = open('yesterday.new',mode='w',encoding='utf-8')

for line in f:
	if "我" in line:
		line = line.replace('我','房天生')
	t.write(line)
f.close()
t.close()