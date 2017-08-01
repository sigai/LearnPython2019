#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import random
import urllib.request


def download_web_img(url):
    name = random.randrange(1,1000)
    full_name = str(name)+'.jpg'
    urllib.request.urlretrieve(url,full_name)

download_web_img("http://wx2.sinaimg.cn/mw600/005vbOHfgy1fg4qnoxz9cj30s70hx7ag.jpg")