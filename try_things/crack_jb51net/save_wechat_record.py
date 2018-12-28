#!/usr/bin/env python3
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
import json

import requests
import itchat
from itchat.content import *
import pymongo
from mongoengine import connect, Document, StringField

itchat.auto_login(hotReload=True)

search_res = itchat.search_friends(name="房天生")

user = search_res[0]['UserName']
t = Thread(target=itchat.run, name="thread_run")
t.start()

def get_response(msg):
    url = "http://openapi.tuling123.com/openapi/api/v2"
    data = {"reqType":0,
			"perception": {
				"inputText": {
					"text": msg
				}
			},
			"userInfo": {
				"apiKey": "0114f999728f423e8ebccacc10463c42",
				"userId": "demo"
			}
		}
    res = requests.post(url, data=json.dumps(data))
    print(res.json())
    return res.json()['results'][0]['values']['text']

start = 0
while True:
    # Need to register before sending msg
    @itchat.msg_register([TEXT, PICTURE], isFriendChat=True)
    def callback_msg(msg):
        print(msg.type)
        if msg.type == "Text":
            with open("codes.txt", encoding="utf-8", mode="a") as f:
                f.write(msg.text + "\n")
            res = get_response(msg.text)
            itchat.send_msg("[机器人]: " + res, user)
        if msg.type == "Picture":
            msg.download(msg['FileName'])
    
    delay = random.randint(1, 3)
    print(f"[+] Watting for {delay}seconds...")
    sleep(delay)
    start += 1
