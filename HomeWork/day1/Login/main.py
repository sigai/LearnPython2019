#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import getpass


def main():
    block_list = dict()
    i = 0
    while i < 3:
        username = input("请输入用户名：")
        with open('blacklist', 'r', encoding='utf-8') as b:
            blacklist = b.readlines()
        if username in [locked.strip() for locked in blacklist]:
            print("用户{user}已被锁定！".format(user=username))
            break
        password = getpass.getpass("请输入密码:")
        with open('database', 'r', encoding='utf-8') as db:
            datas = db.readlines()
        users = [(user.strip().split(" ")[0]) for user in datas]
        pwds = [(user.strip().split(" ")[-1]) for user in datas]
        print(users,pwds)
        if username in users:
            if password == pwds[users.index(username)]:
                print("{user}登陆成功！".format(user=username))
                break
            else:
                if block_list.setdefault(username, 0):
                    block_list[username] = block_list[username] + 1
                else:
                    block_list[username] = 1
                print("密码错误，还有{n}次机会！".format(n=3 - block_list[username]))
                i = max(block_list.values())
        else:
            print("用户名不存在！")

    else:
        with open('blacklist', 'a', encoding='utf-8') as b:
            b.write(username+'\n')
            print("{user}已经被加入黑名单！".format(user=username))

if __name__ == '__main__':
    main()