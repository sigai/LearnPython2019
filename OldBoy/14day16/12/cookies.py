#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import requests

i1 = requests.get(url="http://dig.chouti.com/help/service")

i2 = requests.post(
    url="",
    data={
        'phone':'',
        'password':'',
        'oneMonth':''
    },
    cookies = i1.cookies.get_dict()
)

gpsd = i1.cookies.get_dict()['gpsd']
i3 = requests.post(
    url='',
    cookies={'gpsd':gpsd}
)
print(i3.text)
