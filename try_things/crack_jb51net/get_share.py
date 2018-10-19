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
from mongoengine import connect, Document, StringField

itchat.auto_login(hotReload=True)

search_res = itchat.search_mps(name="脚本之家")

jb51net = search_res[0]['UserName']
t = Thread(target=itchat.run, name="thread_run")
t.start()

connect("jb51net")

class Book(Document):
    url = StringField()
    book = StringField()
    bid = StringField()
    code = StringField()
    
    meta = {"collection": "books"}
    
    def __str__(self):
        return f"<{self.bid}: {self.book}>"

infos = Book.objects(url__ne=None, code__exists=False).limit(10)
    
# TODO: test to make sure it all right.

for info in infos:
    print(f"\t[+] Processing{info.bid}:", info.book)
    
    # Need to register before sending msg
    @itchat.msg_register([TEXT, SHARING], isMpChat=True)
    def callback_msg(msg):
        print(msg.type)
        if msg.type == "Text":
            itchat.logout()
        elif msg.type == "Sharing":
            rep = re.search(r"网盘提取码：(.{4})\n", msg["Content"])
            code = rep.group(1) if rep else ""
            if code:
                info.code = code
                info.save()
                print("\t[*] Updated", info.book, code)
            else:
                print("\t[*] There is no need share code for this book!!!")
    
    # Send msg after registered so the thread can auto handle replies
    itchat.send_msg(info.bid, jb51net)
    sleep(5)
else:
    itchat.logout()