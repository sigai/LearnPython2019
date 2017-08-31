#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

class Site(object):
	def __init__(self):
		self.titles = []
		self.links=[]
		self.relation = []
	
	def relate(self,Article_obj):
		self.links.append(Article_obj.link)
		self.titles.append(Article_obj.title)
		self.relation.append("<a "+Article_obj.link+">"+Article_obj.title+"/a>")
	
	def sitemap(self):
		pass
	

class Article(object):
	def __init__(self,id,title,description,content):
		self.id = id
		self.title = title.strip()
		self.description = description.strip()
		self.content = content.strip()
		self.link = self.title.replace(" ","-")



index = Site()
a = Article(0,"How to fix 0x error ","meta of How to fix errors ","about How to fix error\n")
index.relate(a)
print(index.relation)
print(a.id)
print(a.title)
print(a.description)
print(a.content)