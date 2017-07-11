#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from conf import settings
from core import accounts

# from Atm.conf import settings
# from Atm.core import accounts


def make_transaction(log_obj, account_data, tran_type, amount, *args, **kwargs):
    amount = float(amount)
    if tran_type in settings.TRANSACTION_TYPE:
        interest = amount * settings.TRANSACTION_TYPE[tran_type]['interest']
        old_balance = account_data['balance']
        print(old_balance)
        if settings.TRANSACTION_TYPE[tran_type]['action'] == 'plus':
            new_balance = old_balance + amount + interest
        elif settings.TRANSACTION_TYPE[tran_type]['action'] == 'minus':
            new_balance = old_balance - amount - interest

            if new_balance <0:
                print('Not enough')
                return
        account_data['balance'] = new_balance
        accounts.dump_account(account_data)
        log_obj.info('')
        return account_data
    else:
        print("invalid Transacation Type")

