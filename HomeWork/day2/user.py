#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os

data = {}
with open('data','r',encoding='utf-8') as d:
    for line in d:
        info = line.strip().split(":")
        data[info[0]] = info[1]


while True:
    if os.path.exists('cart'):
        with open('cart','r', encoding='utf-8') as t:
            salary, *cart = t.read().split('\n')
        salary = int(salary)

        break
    else:
        salary = input("请输入您的薪水：")
        if salary.isdigit():
            salary = int(salary)
            cart = []
            break
        else:
            continue


show_salary = "您的账户余额：{salary}".center(50,"-")

show_goods = "商品名称：{product:>10s}\t\t\t商品价格：{price:>6s}"

flag = True

while flag:
    for i in data:
        product = i
        price = data[i]
        if i in cart:
            product = "*"+product
        print(show_goods.format(product=product,price=price))
    else:
        print(show_salary.format(salary=salary))

    choice = input("请输入商品名称购买：")
    if  choice == 'q':
        print("离开")
        flag = False
    elif int(salary) - int(data[choice]) < 0:
        print("您的余额已经不足")
        flag = False
    else:
        salary = int(salary) - int(data[choice])
        cart.append(choice)

else:
    print("欢迎下次光临")
    with open('cart','w', encoding='utf-8') as c:
        c.write(str(salary)+"\n"+"\n".join(cart))