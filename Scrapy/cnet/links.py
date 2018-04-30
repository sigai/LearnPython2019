#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pymongo
CLIENT = pymongo.MongoClient(host="192.168.28.106", port=27017)
DB = CLIENT['download_cnet_com']
software = DB['software']

d = {}
with open('total.txt', mode='r', encoding='utf-8') as f:
    for line in f:
        url = line.strip()
        sid = url.split("/")[-1].split(".")[0].split("-")[-1]
        d[sid] = url


res = software.find({"size": {"$exists": False}})

count = 0
for each in res:
    sid = each['id']
    url = d.get(sid, None)
    if url:
        with open("links.txt", mode='a', encoding='utf-8') as f:
            f.write(url + "\n")
        count += 1
        print("[+] %s" % sid)
    if count == 10000:
        break
