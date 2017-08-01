#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import json
import os
import random


account_sample = {
    'id' : '123456',
    'password':'123456',
    'credit': 15000,
    'balance': 15000,
    'cardholder':'Jhon Smith',
    'enroll_date':'2016-01-01',
    'expire_date':'2021-01-01',
    'billing_date':'22',
    'status':0 # current account 0, delinquent account 1,
}
#id = random.randrange(6222578900000000,6222579000000000)
id = 123456
account_sample['id'] = str(id)
with open(os.path.join('accounts',str(account_sample['id'])+'.json'),'w',encoding='utf-8') as j:
    json.dump(account_sample, j, indent=4, separators=(',', ': '))
