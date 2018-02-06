"""
POST:http://sso.smartcost.com.cn/checksms
data:
zhmobile:13758122898
"""

import requests
from time import sleep

def register(tel):
    url     = "http://sso.smartcost.com.cn/checksms"
    payload = {"zhmobile":tel,}
    headers = {'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3278.0 Safari/537.36"}
    res     = requests.post(url, data=payload, headers=headers)
    return res

def forget():
    pass

def main(flag):
    tel = "13758122898"
    while flag:
        res = register(tel)
        data = res.json()
        print(data.get("msg"))
        flag = False


if __name__ == '__main__':
    main(True)
