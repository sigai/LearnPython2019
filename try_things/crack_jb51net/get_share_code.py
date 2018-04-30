#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
"""
3 days one time
"""
from threading import Thread
import re
from time import sleep
from datetime import datetime
import random

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

infos = books.find({"$and":[{"url":{"$ne": None}}, {"code":{"$exists":False}}]})

sucess = 0
for info in tqdm(infos):
    sucess += 1
    if sucess == 10:
        print("[*] Mission Complete.")
        break
    bid = info['bid']
    print("\t[+] Processing:", info['book'])
    @itchat.msg_register(TEXT, isMpChat=True)
    def callback_msg(msg):
        rep = re.search(r"分享密码：(.{4})", msg.text)
        code = rep.group(1) if rep else ""
        book = msg.text.split('\n')[0].strip()
        res = books.update({'bid': bid}, {"$set": {"code": code}})
        if code:
            print("\t[-] Updated of ", book, code, res)
            if res['updatedExisting']:
                print("\t[*] Updated", book, code)
        else:
            print("\t[*] Something wrong!!!")

    itchat.send_msg(f"下载{bid}", jb51net)
    w = random.randrange(1, 5)
    print("\n[*] Watting %s min for next..." % w)
    sleep(60 * w)
