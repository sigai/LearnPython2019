#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os


def file_db_handle(conn_params):
    # print('file db', conn_params)   # for test
    db_path = os.path.join(conn_params['path'],conn_params['name'])

    return db_path


def db_handler(conn_params):
    '''
    数据分发处理
    :param conn_parms:
    :return: account文件夹路径
    '''
    if conn_params['engine'] == 'file_storage':
        return file_db_handle(conn_params)

