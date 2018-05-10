#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
from time import sleep
from datetime import datetime
import requests
import re


url = "http://www.gatherproxy.com/proxylist/country/?c=China"
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3409.2 Safari/537.36"}
proxy = {"http":"http://127.0.0.1:1087"}

def get():
    res = requests.get(url, headers=headers, proxies=proxy)
    p = re.compile(r'"PROXY_IP":"(?P<ip>.*?)".*"PROXY_PORT":"(?P<port>.*?)"')

    g = p.findall(res.text)
    for ip, port in g:
        with open("proxies.txt", mode='a', encoding='utf-8') as f:
            f.write("%s:%s\n"%(ip, int(port, base=16)))

while True:
    print("[+] [%s]..."%datetime.now().strftime("%H:%M:%S"))
    get()
    sleep(5 * 60)
