#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os
import json
import time
from Atm.core import db_handler
from Atm.conf import settings

def access_auth(account,password):
    '''
    认证功能
    :param account:
    :param password:
    :return:
    '''
    db_path = db_handler.db_handler(settings.DATABASE)
    account_file = os.path.join(db_path, "%s.json"%account)
    print(account_file)

    if os.path.exists(account_file):
        with open(account_file,'r', encoding='utf-8') as f:
            account_data = json.load(f)
            if account_data['password'] == password:
                exp_time_stamp = time.mktime(time.strptime(account_data['expire_date']))
                if time.time() > exp_time_stamp:
                    print('expired')
                else:
                    return account_data
            else:
                print('invilid password')
    else:
        print('invilid account')

def access_account(user_data, access_logger):
    '''
    登陆功能
    :param user_data:
    :param access_logger:
    :return: 用户数据，否则默认None
    '''
    flag = 0
    while user_data['is_authenticated'] is False and flag <3:
        account = input("CardID:").strip()
        password = input("PassWord:").strip()
        auth = access_auth(account, password)
        if auth:
            user_data['is_authenticated'] = True
            user_data['account_id'] = account
            return auth
        flag = flag + 1
    else:
        pass
        exit()