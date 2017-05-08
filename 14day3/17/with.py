#!/usr/bin/python
# -*- coding: UTF-8 -*-

with open('yesterday','r',encoding='utf-8') as f ,\
	open('yesterday.new','w',encoding='utf-8') as t:
	text = f.read()
	t.write(text.replace('我','房天生'))