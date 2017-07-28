#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import requests
import json
from threading import Thread, Semaphore
from queue import Queue


class MyThread(Thread):

    def __init__(self, semaphore, func, args=()):
        super(MyThread, self).__init__()
        self.func = func
        self.args = args
        self.result = None
        self.semaphore = semaphore

    def run(self):
        self.semaphore.acquire()
        self.result = self.func(*self.args)
        self.semaphore.release()


    def get_result(self):
        return self.result

def get_translation(url):
    '''
    获取结果
    :param url:
    :return: 成功结果, 异常返回None
    '''
    # 捕捉异常
    try:
        r = requests.get(url)
    except Exception as e:
        print("\033[31;1mERROR: %s\033[0m" % e)
        return
    else:
        r = r.text
        tt = json.loads(r)
        return tt[0][0][0]

# 目标语言代码
tolang = ['de', 'es', 'fr', 'it', 'ja', 'pl', 'pt', 'ru', 'tr', 'zh-CN']
# 每次只翻译一种语言
tl = tolang[9]
# 载入数据字典
with open("desc.txt",'r',encoding='utf-8') as d:
    desc = json.load(d)

# 临时字典
dic = {}
tasklist=[]

mysemaphore = Semaphore(5)
# 开始工作
for i, filename in enumerate(desc):
    # 获取目标翻译, 如果空才翻译
    res_tl = desc[filename].get(tl, None)
    if res_tl is None:
        # 获取源英文
        desc_en = desc[filename].get('en', None)
        if desc_en is None:
            print(f"{filename} is Null.")
            continue
        else:
            url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={tl}&dt=t&q={desc_en}'
            t = Thread(mysemaphore, target=get_translation, args=(url,))
            t.start()

for t in tasklist:
    t.join()
    res = t.get_result()

        #
        # # 捕捉异常
        # try:
        #     r = requests.get(url)
        # except Exception as e:
        #     print("\033[31;1mERROR: %s\033[0m" % e)
        #     break
        # else:
        #     r = r.text
        #     tt = json.loads(r)
        #     dic[filename] = {tl: tt[0][0][0]}
        #     print("(%s/%s)\33[34m%s\33[0m" % (i+1, len(desc), tt[0][0][0]))
        # finally:
        #     # 保存翻译
        #     desc[filename].update(dic[filename])

with open("desc.txt",'w',encoding='utf-8') as f:
    json.dump(desc, f, indent=1,)
print(f"\33[34m{tl.upper()} is translated.\33[0m")
