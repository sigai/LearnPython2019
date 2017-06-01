#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


def speak(name="Sigai", action="run", item="fast"):
    print(name,action,item)

speak()
speak('Tom', 'eat', 'shit')
speak(item="slow")
speak(item="slow", action="fuck")
