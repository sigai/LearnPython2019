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

itchat.auto_login(hotReload=True)

info = itchat.search_mps(name="脚本")
jb51net = info[0]['UserName']


Thread(target=itchat.run, name="thread_run").start()


CLIENT = pymongo.MongoClient(host="localhost", port=27017)
DB = CLIENT['jb51net']
books = DB['books']

infos = books.find({"$and":[{"url":{"$ne": None}}, {"code":{"$exists":False}}]})

sucess = 0
for info in infos:
    sucess += 1
    if sucess == 10:
        print("[*] Mission Complete.")
        itchat.logout()
        break
    bid = info['bid']
    print("\t[+] Processing:", info['book'])
    
    @itchat.msg_register(SHARING, isMpChat=True)
    def callback_msg(msg):
        #print(msg)
        if str(msg.type) != "Sharing":
            itchat.logout()

        rep = re.search(r"网盘提取码：(.{4})\n", msg["Content"])
        code = rep.group(1) if rep else ""
        book = msg.text.split('\n')[0].strip()
        if "" == code:
            code = False
        res = books.update_one({'bid': bid}, {"$set": {"code": code}})
        if code:
            if res['updatedExisting']:
                print("\t[*] Updated", book, code)
        else:
            print("\t[*] There is no need share code for this book!!!")
        
        w = random.randrange(1, 5)
        print("\n[*] Watting %s min for next..." % w)
        sleep(60 * w)
    itchat.send_msg(f"{bid}", jb51net)
    
# TODO
