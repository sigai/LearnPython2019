#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
"""
3 days one time
"""
from threading import Thread
import re
from time import sleep

import itchat
from itchat.content import *
import pymongo
from tqdm import tqdm

itchat.auto_login(hotReload=True)

info = itchat.search_mps(name="脚本")
jb51net = info[0]['UserName']


Thread(target=itchat.run, name="thread_run").start()


CLIENT = pymongo.MongoClient(host="localhost", port=27017)
DB = CLIENT['jb51net']
books = DB['books']

infos = books.find({"url":{"$ne": None}})


for info in tqdm(infos):

    bid = info['bid']
    print(info)
    @itchat.msg_register(TEXT, isMpChat=True)
    def callback_msg(msg):
        code = re.search(r"分享密码：(.{4})", msg.text).group(1)
        book = msg.text.split('\n')[0].strip()
        res = books.update({"$and": [{'bid': bid}, {"book": book}]}, {"$set": {"code": code}})
        print(book, code, res)

    itchat.send_msg(f"下载{bid}", jb51net)
    sleep(60 * 10)
