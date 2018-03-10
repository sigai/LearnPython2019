#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
"""
good but too slow
"""
import xmltodict
import requests


proxies = {"http":"http:127.0.0.1:1087"}
res = requests.get("http://google.com/complete/search?hl=en&output=toolbar&q=cmd.exe", proxies=proxies)
words = xmltodict.parse(res.text)
words_list = words['toplevel']['CompleteSuggestion']

for word in words_list:
    print(word['suggestion']['@data'])
