#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pymongo
CLIENT = pymongo.MongoClient(host="192.168.28.106", port=27017)
DB = CLIENT['download_cnet_com']
software = DB['software']

urls = []
with open('total.txt', mode='r', encoding='utf-8') as f:
    for line in f:
        urls.append(line.strip())


ids = set()
res = software.find({})

for each in res:
    ids.add(each['id'])

for url in urls:
    pid = url.split("/")[-1].split(".")[0].split("-")[-1]
    if pid not in ids:
        with open("links.txt", mode='a', encoding='utf-8') as f:
            f.write(url + "\n")
