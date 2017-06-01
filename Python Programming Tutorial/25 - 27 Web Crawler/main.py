#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''简易爬虫'''


import requests
from bs4 import BeautifulSoup

site = 'http://jandan.net'
def duanzi_spider(max_pages):
    page = 1
    while page < max_pages:
        url = "http://jandan.net/duan/page-" + str(page)
        source_code = requests.get(url)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text,'html.parser')
        for duanzi in soup.find_all('p',):#soup.find_all('a',{'class','item-name'})
            if duanzi.string is not None:#href = site + duanzi.get('href')
                print(duanzi.string)#title = duanzi.string
            #get_single_item_data(item_url)
        page += 1#

def get_single_item_data(item_url):
    source_code = requests.get(item_url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text)
    for item_name in soup.find_all('div',{'class':'i-name'}):
        print(item_name.string)
    for link in soup.find_all('a'):
        href = site + link.get(href)
        print(href)


duanzi_spider(2)