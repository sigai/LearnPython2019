#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


from gevent import monkey
monkey.patch_all()#将当前程序所有IO操作做上标记
from urllib import request
import gevent, time
from gevent.pool import Pool


def getUrl(url):
    print("Get: %s"%url)
    try:
        resp = request.urlopen(url)
    except Exception as e:
        print(e)
    else:
        data = resp.read()
        # with open("url.html","wb") as h:
        #     h.write(data)
        print("%d bytes has been downloaded from %s"%(len(data),url))

url_list = [f"http://www.solidot.org/story?sid={i}" for i in range(3000)]

pool = Pool(100)
for url in url_list:
    pool.add(gevent.spawn(getUrl, url))
pool.join()
