#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import requests


proxies_list = [{"http":"http://104.236.54.196:8080"},
                {"http":"http://152.160.82.173:8118"},
                {"http":"http://173.212.202.65:80"},
                {"http":"http://50.233.137.37:80"},
                {"http":"http://52.8.41.170:4444"}]

socks_list = [{"http": "socks5://127.0.0.1:1086"},]

headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3386.1 Safari/537.36"}

url = "http://download.cnet.com:/Tonatiuh/3000-2383_4-75904882.html"
# url = "http://httpbin.org/ip"

res = requests.get(url=url, headers=headers, proxies=socks_list[0])

print(res.text)
