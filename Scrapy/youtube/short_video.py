#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
opener = webdriver.Chrome(chrome_options=chrome_options)

results = []
p = re.compile(r'"videoId":"(.*?)",')
for i in range(30):
    url = f"https://www.youtube.com/results?sp=CAESBBABGAE%253D&search_query=Aerial+photography&page={i+1}"
    opener.get(url)
    text = opener.page_source
    res = p.findall(text)

    results.extend(res)

print(results)
for i in results:
    if len(i) > 20:
        results.remove(i)

with open('urls.txt', mode='a', encoding='utf-8') as f:
    f.write('\n'.join([f'https://www.youtube.com/watch?v={i}' for i in results]))
