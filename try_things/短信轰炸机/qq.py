"""
POST:https://ssl.zc.qq.com/cgi-bin/zc/sms_send
data:
telphone:008613758122898
nick:
elevel:11
response:{"ec":0,"elevel":"3"}
error count 0
请求过多要求发短信
"""
import requests
from time import sleep

def register(tel):
    url     = "https://ssl.zc.qq.com/cgi-bin/zc/sms_send"
    payload = {"nick":"",
                "telphone":"0086" + tel,
                "elevel":"11",
                }
    headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3278.0 Safari/537.36"}
    res     = requests.post(url, data=payload, headers=headers)
    return res

def forget():
    pass

def main(flag):
    tel = "13758122898"
    while flag:
        res = register(tel)
        data = res.json()
        print(data)
        if data.get("ec") == 0:
            print("A Fuck...")
        flag = False

if __name__ == '__main__':
    main(True)
