#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

data={}
with open('data','r', encoding='utf-8') as d:
    for each in d:
        item, price = each.strip().split(':')
        data[item] = int(price)

print("欢迎登陆管理:")
flag = True
while flag:
    for item in data:
        print(item,data[item])
    operation = input("请输入'[商品名称] [商品价格]',进行添加或修改商品信息,[del 商品名称]删除商品,[q]退出:\n")
    operators = operation.strip().split()
    if operators[0] == 'q':
        flag = False
    elif operators[0] == 'del' and operators[1] in data:
        del data[operators[1]]
    elif len(operators)==2 and operators[1].isdigit():
        data[operators[0]] = int(operators[1])
    else:
        print("请输入有效操作")
        continue
else:
    print("欢迎下次光临")
    with open('data', 'w', encoding='utf-8') as d:
        for item in data:
            d.write(item+":"+str(data[item])+'\n')