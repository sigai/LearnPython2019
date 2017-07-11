#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from core import auth, logger

user_data = {
    'account_id': None,
    'is_authenticated': None,
    'account_data': None
}

access_logger = ""

def interactive(user_data):
    pass

def run():
    '''
    ATM验证 初始验证
    :return:
    '''
    access_account = auth.access_account(user_data, access_logger)
    if user_data['is_authenticated']:
        user_data['account_data'] = access_account
        interactive(user_data)
if __name__ == '__main__':
    pass