#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from gevent import monkey; monkey.patch_all()#将当前程序所有IO操作做上标记
import gevent, time
from urllib import request



def getUrl(url):
    print("Get: %s"%url)
    resp = request.urlopen(url)
    data = resp.read()
    # with open("url.html","wb") as h:
    #     h.write(data)
    print("%d bytes has been downloaded from %s"%(len(data),url))

urls = ["http://jandan.net/",
        "http://www.solidot.org/"
        "http://www.iplaysoft.com/"]
time_start = time.time()
for url in urls:
    getUrl(url)
print("同步串行打开网页 耗时：",time.time()-time_start)

async_time = time.time()

gevent.joinall([
    gevent.spawn(getUrl,"http://www.gevent.org/"),
    gevent.spawn(getUrl,"http://www.iplaysoft.com/"),
    gevent.spawn(getUrl,"http://www.ipc.me/"),
    gevent.spawn(getUrl,"http://jandan.net/"),
    gevent.spawn(getUrl,"http://www.solidot.org/"),
    gevent.spawn(getUrl,"http://www.iplaysoft.com/"),
])


print("异步并行打开网页 耗时：",time.time()-async_time)
