#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os


# 文件处理器, 只负责处理文件模式的数据
def file_db_handle(conn_params):
    # print('file db', conn_params)   # for test

    #根据设置字典中的路径信息和文件夹信息, 拼接出数据路径, 并返回路径
    db_path = os.path.join(conn_params['path'],conn_params['name'])

    return db_path


def db_handler(conn_params):
    '''
    数据分发处理: 不同类型数据用不同的方法处理
    :param conn_parms:
    :return: account文件夹路径
    '''

    # 处理收到的设置参数, 获得数据保存类型. 文件类型调用文件处理器方法. 并将设置参数传过去.
    if conn_params['engine'] == 'file_storage':
        return file_db_handle(conn_params)

