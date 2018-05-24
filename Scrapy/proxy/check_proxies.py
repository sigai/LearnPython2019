#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import time


import requests
from redis import StrictRedis, ConnectionPool
from threading import Thread

pool = ConnectionPool.from_url('redis://@192.168.28.110:6379/0')
red = StrictRedis(connection_pool=pool)

def check_proxy(proxy):
    url = "http://music.163.com/api/user/getfollows/271334662?offset=0&limit=20&order=true"
    # url = "http://music.163.com/api/user/getfolloweds?userId=1&offset=20&limit=20&order=true"

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3409.2 Safari/537.36"}
    try:
        start = time.time()
        res = requests.get(url, headers=headers, proxies={"http":proxy}, timeout=2)
        cost = time.time() - start
    except Exception as e:
        return False
    try:
        r = res.json()
    except Exception as e:
        return False
    if r['code'] == 200:
        return cost
    else:
        return False

def check(ip, port):
    proxy = "http://%s:%s"%(ip, port)
    for i in range(10):
        res = check_proxy(proxy)
        delay = int(res * 100)
        if 100 > delay > 0:
            continue
        else:
            break
    else:
        red.sadd("proxies", "%s:%s"%(ip, port))

proxies =[]
with open("proxies.txt", mode='r', encoding='utf-8') as f:
    for line in f:
        ip, port = line.strip().split(":")
        proxies.append((ip, port))

proxies = list(set(proxies))
with open("proxies.txt", mode='w', encoding='utf-8') as f:
    f.write("\n".join([f"{ip}:{port}" for ip, port in proxies]))

tasks=[]
for ip, port in proxies:
    t = Thread(target=check, args=(ip, port))
    tasks.append(t)

for t in tasks:
    t.start()
for t in tasks:
    t.join()