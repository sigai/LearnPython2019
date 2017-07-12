#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from conf import settings
from core import accounts

# from Atm.conf import settings
# from Atm.core import accounts


def make_transaction(log_obj, account_data, tran_type, amount, *args, **kwargs):
    '''
    交易操作
    :param log_obj:
    :param account_data:
    :param tran_type:
    :param amount:
    :param args:
    :param kwargs:
    :return:
    '''
    #格式化用户输入的金额.
    amount = float(amount)
    # 根据交易类型做相关处理
    if tran_type in settings.TRANSACTION_TYPE:
        # 利息(手续费)
        interest = amount * settings.TRANSACTION_TYPE[tran_type]['interest']
        # 原有余额
        old_balance = account_data['balance']
        # print(old_balance)

        #根据交易类型计算余额
        if settings.TRANSACTION_TYPE[tran_type]['action'] == 'plus':
            new_balance = old_balance + amount + interest
        elif settings.TRANSACTION_TYPE[tran_type]['action'] == 'minus':
            new_balance = old_balance - amount - interest
            # 如果操作结束余额异常处理则直接返回
            if new_balance <0:
                print('Not enough')
                return
        # 无异常开始处理数据, 保存数据, 写入日志, 返回结果.
        account_data['balance'] = new_balance
        accounts.dump_account(account_data)
        log_obj.info('')
        return account_data
    else:
        # 无效交易类型
        print("invalid Transacation Type")

