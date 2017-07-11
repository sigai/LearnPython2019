#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from core import auth, logger, accounts, transaction  # for release
import time

# from Atm.core import accounts  # for test
# from Atm.core import transaction  # for test
# from Atm.core import logger, auth

user_data = {
    'account_id': None,
    'is_authenticated': None,
    'account_data': None
}

access_logger = logger.get_logger('access')
trans_logger = logger.get_logger('transaction')

def account_info():
    pass


def repay(user_data):
    account_data = accounts.load_current_balance(user_data['account_id'])
    current_balance = """
    ----------BALANCE INFOMATION----------
    Credit\t:\t%s
    Balance\t:\t%s""" % (account_data['credit'], account_data['balance'])
    print(current_balance)
    back_flag = True
    while back_flag:
        repay_amount = input("Repay amount:").strip()
        if len(repay_amount) > 0 and repay_amount.isdigit():
            print('ok')
            # 'repay' 这里可以用sys._getframe().f_code.co_name
            new_balance = transaction.make_transaction(trans_logger, account_data, 'repay', repay_amount)
            if new_balance:
                print('New Balance:', new_balance['balance'])
        else:
            print('invalid amount')

        if repay_amount == 'b':
            back_flag = False


def withdraw(user_data):
    account_data = accounts.load_current_balance(user_data['account_id'])
    current_balance = """
        ----------BALANCE INFOMATION----------
        Credit\t:\t%s
        Balance\t:\t%s""" % (account_data['credit'], account_data['balance'])
    print(current_balance)
    back_flag = True
    while back_flag:
        withdraw_amount = input("Repay amount:").strip()
        if len(withdraw_amount) > 0 and withdraw_amount.isdigit():
            print('ok')
            new_balance = transaction.make_transaction(trans_logger, account_data, 'withdraw', withdraw_amount)
            if new_balance:
                print('New Balance:', new_balance['balance'])
        else:
            print('invalid amount')

        if withdraw_amount == 'b':
            back_flag =False


def transfer():
    pass


def pay_check():
    pass


def logout():
    pass


def interactive(user_data):
    menu = """
    --------ATM----------
    1. 账户信息
    2. 还款
    3. 取款
    4. 转账
    5. 账单
    6. 退出
    ---------------------
    """
    menu_dict = {
        '1': account_info,
        '2': repay,
        '3': withdraw,
        '4': transfer,
        '5': pay_check,
        '6': logout,
    }

    online_flag = True

    while online_flag:
        print(menu)
        user_option = input(">>>:").strip()
        if user_option in menu_dict:
            menu_dict[user_option](user_data)
        else:
            print("invalid option.")


def run():
    '''
    ATM验证 初始验证
    :return:
    '''
    access_account = auth.access_account(user_data, access_logger)
    if user_data['is_authenticated']:
        user_data['account_data'] = access_account
        interactive(user_data)  # 进入交互界面interface


if __name__ == '__main__':
    pass
