"""
POST:http://www.faisco.cn/ajax/reg_h.jsp
data:
cmd:checkCacctNew
cacct:13758122898
acctType:1
"""

import requests
from time import sleep

def register(tel):
    url     = "http://www.faisco.cn/ajax/reg_h.jsp"
    payload = {"cmd":"checkCacctNew",
                "cacct":tel,
                "acctType":"1",
                }
    headers = {'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3278.0 Safari/537.36"}
    res     = requests.post(url, params=payload, headers=headers)
    return res

def forget():
    pass

def main(flag):
    tel = "13758122898"
    while flag:
        res = register(tel)
        data = res.json()
        if data.get("success"):
            print("Fuck...")
            sleep(60)
        else:
            print("miss..")
            sleep(1)

if __name__ == '__main__':
    main(True)
