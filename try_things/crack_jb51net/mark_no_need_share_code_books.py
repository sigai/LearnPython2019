#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
from collections import Counter
from pprint import pprint
import requests
from mongoengine import Document, connect, StringField

connect("jb51net")
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"}

class Book(Document):
    url = StringField()
    book = StringField()
    bid = StringField()
    code = StringField()
    
    meta = {"collection": "books"}
    
    def __str__(self):
        return f"<{self.bid}: {self.book}>"


docs = Book.objects(code=None)
#for doc in docs:
#    print("[+] processing: ", doc)
#    if None != doc.code:
#        print(f"\t{doc.bid} share code exists")
#        continue
#    if None == doc.url:
#        print(f"\t{doc.bid} no share link")
#        continue
#    res = requests.head(doc.url.replace("http://","https://"), headers=headers)
#    if 302 != res.status_code:
#        print(f"\t{doc.bid} no share code")
#        doc.code = ""
#        doc.save()
#    else:
#        print(f"\t{doc.bid} NEED TO WORKING ON...")

c = Counter()
for doc in docs:
    if doc.url and not doc.code:
        c["working"] += 1
        print(doc.url, doc.code)
print(c)