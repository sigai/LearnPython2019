"""
GET:http://www.aipai.com/app/www/apps/ums.php?step=ums&mobile=13758122898
有发送上限
"""
import requests

def register(tel):
    url = "http://www.aipai.com/app/www/apps/ums.php?step=ums&mobile=" + tel
    res = requests.get(url)
    return res

def main(flag):
    tel = "13758122898"
    while flag:
        res = register(tel)
        data = res.json()
        print(data.get("msg"))
        flag = False

if __name__ == '__main__':
    main(True)

