#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import getpass

#加载锁定帐号
def load_locked_accounts():
	with open('locked_accounts','r',encoding='utf-8') as locked:
		accounts = locked.readlines()
	return accounts

#或者用户输入帐号
def get_user_account():
	account = input("帐号：").strip()
	return account

#检查帐号
def check_user_account(account,accounts):
	if account in accounts:
		return True
	else:
		return False
	
#获得用户输入密码
def get_user_password():
	password = getpass.getpass('密码：')
	return password

#加载帐号信息
def load_user_info(account):
	with open('db','r',encoding='utf-8') as db:
		infos = db.readlines()
	for info in infos:
		metas = info.split('\t')
		if account in metas:
			password = metas[1]
			flag = metas[2]
			return (account,password,flag)
		else:
			return None
			
		