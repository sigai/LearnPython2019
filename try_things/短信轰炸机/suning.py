"""
POST:https://reg.suning.com/srs-web/ajax/code/sms.do
https://reg.suning.com/srs-web/ajax/code/yy.do
data:
scen:PERSON_MOBILE_REG_VERIFY_MOBILE
phoneNum:13758122898
uid:siller
code:ef5edd52-1a4f-4aaa-a141-ffbfd9c3c85a-f3be0XXXC2E5F64ED00C1D572527A6D64AC2C92A|59622829534914404232963506797|138cf83da5f824933bfc6f17575962282953491440423296350679759622829534914404232963506797
scen:PERSON_MOBILE_REG_VERIFY_VOICE
phoneNum:13758122898
uid:
code:
"""

import requests
from time import sleep

def register(tel):
    url     = "https://reg.suning.com/srs-web/ajax/code/sms.do"
    payload = {"scen":"PERSON_MOBILE_REG_VERIFY_MOBILE",
                "phoneNum":tel,
                "uid":"siller",
                "code":"ef5edd52-1a4f-4aaa-a141-ffbfd9c3c85a-f3be0XXXC2E5F64ED00C1D572527A6D64AC2C92A|59622829534914404232963506797|138cf83da5f824933bfc6f17575962282953491440423296350679759622829534914404232963506797"
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
        print(res)
        data = res.json()
        print(data.get("returnMsg"))
        flag = False


if __name__ == '__main__':
    main(True)
