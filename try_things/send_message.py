import requests
import json
import argparse

def get_token(corpid, corpsecret):

    url='https://qyapi.weixin.qq.com/cgi-bin/gettoken'
    values = {'corpid' : corpid ,
        'corpsecret': corpsecret,
        }
    req = requests.post(url, params=values)  
    data = json.loads(req.text)
    return data["access_token"]


def send_msg(msg, to,corpid, corpsecret):

    url="https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token="+get_token(corpid, corpsecret)
    values = """{"touser" : "%s",
    "toparty" : "1",
    "msgtype":"text",
    "agentid":1000004,
    "text":{"content": "%s"},
    "safe":"0"}""" %(str(to),str(msg))

    data = json.loads(values) 
    req = requests.post(url, values.encode("utf-8"))
    return req.json()


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("msg")
    parser.add_argument("to")
    parser.add_argument("corpid")
    parser.add_argument("appkey")
    args = parser.parse_args()
    print(args.msg, args.to, args.corpid, args.appkey)
    res = send_msg(args.msg, args.to, args.corpid, args.appkey)
    print(res)
