#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''雅虎财经已经失效了 下个图片试试'''

from urllib import request

gif_url = "http://wx1.sinaimg.cn/large/88760337gy1fg4femaq3yg20bj06iu0x.gif"


def download_gif(gif_url):
    response = request.urlopen(gif_url)
    gif = response.read()
    #csv_str = str(csv)
    #lines = csv_str.split("\n")
    dest_gif = r'a.gif'
    f = open(dest_gif,'wb')
    #for line in lines:
    f.write(gif)
    f.close()

download_gif(gif_url)