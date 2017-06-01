#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


fw = open('test.txt.new','w')
fw.write('Writing some stuff in my text file\n')
fw.write('Write done\n')
fw.close()


fr = open('test.txt','r')
text = fr.read()
print(text)
fr.close()