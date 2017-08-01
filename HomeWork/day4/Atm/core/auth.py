#!/usr/bin/env python
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
    认证功能:获取账户密码信息,并验证
    *缺陷: 应该这里直接获得账户数据, 不应该在这里处理
    :param account:
    :param password:
    :return:
    '''

    # 获取账户存储位置, 传入数据存储模式设置. 返回账户文件所在的目录
    db_path = db_handler.db_handler(settings.DATABASE)

    # 拼接数据路径
    account_file = os.path.join(db_path, "%s.json"%account)
    # print(account_file)

    # 判断账户有效性
    if os.path.isfile(account_file):    #os.path.exists判断路径(文件或文件夹)是否存在, os.path.isfile能判断路径是否是文件, 也能判断路径是否存在.
        # 有效账户则读取账户信息
        with open(account_file,'r', encoding='utf-8') as f:
            account_data = json.load(f)
            # 开始验证密码流程
            if account_data['password'] == password:
                # 验证成功后,需要先验证账户是否过期
                exp_time_stamp = time.mktime(time.strptime(account_data['expire_date'],"%Y-%m-%d"))
                # 过期处理
                if time.time() > exp_time_stamp:
                    print('expired')
                else:
                    # 验证成功, 返回帐号信息
                    return account_data
            else:
                # 验证失败 默认返回None
                print('invalid password')
    else:
        # 失效账户 默认返回None
        print('invalid account')

def access_account(user_data, access_logger):
    '''
    登陆功能, 获取登陆的帐号和密码.
    :param user_data:
    :param access_logger:
    :return: 用户数据，否则默认None
    '''
    #验证失败次数标记
    flag = 0
    # None 非真非假 好有趣的类型 哈哈
    while user_data['is_authenticated'] is None and flag <3:
        # 获取用户输入的账号密码 一起处理
        account = input("CardID:").strip()
        password = input("PassWord:").strip()

        # 验证帐号密码信息传入账号密码验证成功返回帐号信息,失败返回None.
        auth = access_auth(account, password)

        # 处理验证结果.
        if auth:
            user_data['is_authenticated'] = True
            user_data['account_id'] = account
            return auth
        flag = flag + 1
    else:
        access_logger.error('log error')
        exit()