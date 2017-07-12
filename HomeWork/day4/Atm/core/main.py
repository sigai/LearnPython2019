#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from core import auth, logger, accounts, transaction  # for release
import time

# from Atm.core import accounts  # for test
# from Atm.core import transaction  # for test
# from Atm.core import logger, auth

# 全局变量用于保存帐号和该帐号验证状态, 验证成功保存账户详细信息.
user_data = {
    'account_id': None,
    'is_authenticated': None,
    'account_data': None
}

# 创建日志记录器对象
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

        elif repay_amount == 'b':
            back_flag = False
        else:
            print('invalid amount')


def withdraw(user_data):
    '''
    取款功能:
    :param user_data:
    :return:
    '''
    # 获取最新账户信息
    account_data = accounts.load_current_balance(user_data['account_id'])
    # 打印账户余额信息
    current_balance = """
        ----------BALANCE INFOMATION----------
        Credit\t:\t%s
        Balance\t:\t%s""" % (account_data['credit'], account_data['balance'])
    print(current_balance)
    # 停留本层菜单标识
    back_flag = True
    while back_flag:
        # 获取取款数目
        withdraw_amount = input("Repay amount:").strip()
        # 判定用户输入有效性
        if len(withdraw_amount) > 0 and withdraw_amount.isdigit():
            print('ok')
            # 执行取款操作
            new_balance = transaction.make_transaction(trans_logger, account_data, 'withdraw', withdraw_amount)
            # 执行成功
            if new_balance:
                print('New Balance:', new_balance['balance'])
        # 返回上级菜单
        elif withdraw_amount == 'b':
            back_flag = False
        else:
            # 无效输入
            print('invalid amount')



def transfer():
    pass


def pay_check():
    pass


def logout():
    pass


def interactive(user_data):
    '''
    交互系统: 分发处理操作
    :param user_data:
    :return:
    '''
    # 系统界面
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
    # 分发路由
    menu_dict = {
        '1': account_info,
        '2': repay,
        '3': withdraw,
        '4': transfer,
        '5': pay_check,
        '6': logout,
    }

    # 用户在线操作
    online_flag = True

    while online_flag:
        # 打印界面
        print(menu)
        # 用户操作
        user_option = input(">>>:").strip()
        # 判断有效操作
        if user_option in menu_dict:
            # 执行操作
            menu_dict[user_option](user_data)
        else:
            # 无效
            print("invalid option.")


def run():
    '''
    ATM验证 初始验证
    :return:
    '''

    # 开始获取登陆账号的信息, 传入变量初始用户信息字典和登陆日志记录器对象
    access_account = auth.access_account(user_data, access_logger)

    # 账户通过验证
    if user_data['is_authenticated']:
        # 获取登陆账户的所有信息
        user_data['account_data'] = access_account
        # 开始与用户交互
        interactive(user_data)  # 进入交互界面interface


if __name__ == '__main__':
    pass
