#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


import time
import requests
import base64


headers = {"user-agent":"okhttp/3.8.1",
    "Cache-Control": "max-stale=0",
    "Cookie": "qh[360]=1"}

params = {"retry_type": "no_retry",
    "openudid": "74b33eb7c5c26822",
    "version_name": "1.7.9",
    "device_type": "HM 2A",
    "ssmix": "a",
    "iid": "30235400871",
    "os_api": "19",
    "device_id": "50801494340",
    "resolution": "720*1280",
    "device_brand": "Xiaomi",
    "aid": "1128",
    "manifest_version_code": "179",
    "app_name": "aweme",
    "os_version": "4.4.4",
    "device_platform": "android",
    "version_code": "179",
    "update_version_code": "1792",
    "ac": "wifi",
    "dpi": "320",
    "uuid": "868433021125772",
    "language": "zh",
    "channel": "xiaomi"}

s = requests.Session()
s.headers.update(headers)

t = time.time()
ts = str(int(t))
rt = str(t).replace('.', '')[:-3]
url_send_code = "https://lf.snssdk.com/passport/mobile/send_code/"
data = {"mix_mode":"1",
        "type":"34",
        "mobile": "2e3d333436333d36353d31313032"}
res = s.post(url=url_send_code, params=params.update({"_rticket": rt, "ts": ts}), data=data)
r = res.json()

imgdata=base64.b64decode(r['data']['captcha'])
print(imgdata)
with open('1.png','wb') as f:
    f.write(imgdata)
