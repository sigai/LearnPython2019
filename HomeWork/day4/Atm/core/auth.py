#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os
import json
import time
from core import db_handler, logger
from conf import settings

# from Atm.core import db_handler
# from Atm.conf import settings
# from Atm.core import logger

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

    if os.path.isfile(account_file):    #os.path.exists判断路径(文件或文件夹)是否存在, os.path.isfile能判断路径是否是文件, 也能判断路径是否存在.
        with open(account_file,'r', encoding='utf-8') as f:
            account_data = json.load(f)
            if account_data['password'] == password:
                exp_time_stamp = time.mktime(time.strptime(account_data['expire_date'],"%Y-%m-%d"))
                if time.time() > exp_time_stamp:
                    print('expired')
                else:
                    return account_data
            else:
                print('invalid password')
    else:
        print('invalid account')

def access_account(user_data, access_logger):
    '''
    登陆功能
    :param user_data:
    :param access_logger:
    :return: 用户数据，否则默认None
    '''
    flag = 0
    # None 非真非假 好有趣的类型 哈哈
    while user_data['is_authenticated'] is None and flag <3:
        account = input("CardID:").strip()
        password = input("PassWord:").strip()
        auth = access_auth(account, password)
        if auth:
            user_data['is_authenticated'] = True
            user_data['account_id'] = account
            return auth
        flag = flag + 1
    else:
        access_logger.error('log error')
        exit()