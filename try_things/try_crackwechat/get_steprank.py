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

itchat.auto_login(hotReload=True)

res = itchat.search_friends(name="梁晓桐")
#info = itchat.get_mps()

print(res)
t = Thread(target=itchat.run, name="thread_run")
t.start()


while True:
    @itchat.msg_register(SHARING, isMpChat=True)
    def callback_msg(msg):
        print(msg.type)
        print(dir(msg))
        print(msg.content)
        print(msg.url)
        print(msg.download)
        print(msg.items())
    sleep(1)
