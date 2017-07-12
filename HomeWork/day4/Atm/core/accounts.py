#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os
import json
from core import db_handler    # for release
from conf import settings      # for release
# from Atm.core import db_handler # for test
# from Atm.conf import settings   # for test


def load_current_balance(account_id):
    '''
    读取最新数据
    :param account_id:
    :return:
    '''
    db_path = db_handler.db_handler(settings.DATABASE)
    account_file = os.path.join(db_path,"%s.json"%account_id)
    with open(account_file,'r',encoding='utf-8') as f:
        access_data = json.load(f)
        return access_data


def dump_account(account_data):
    db_path = db_handler.db_handler(settings.DATABASE)
    account_file = os.path.join(db_path, "%s.json" % account_data['id'])
    with open(account_file, 'w', encoding='utf-8') as f:
        json.dump(account_data,f, indent=4, separators=(',', ': '))
        return True