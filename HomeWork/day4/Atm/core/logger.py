#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import os
import logging
from conf import settings  # for release
# from Atm.conf import settings   # for test


def get_logger(log_type):
    logger = logging.getLogger(log_type)
    logger.setLevel(settings.LOG_LEVEL)

    ch = logging.StreamHandler()
    ch.setLevel(settings.LOG_LEVEL)

    # 防止意外用os模块拼接路径
    log_path = os.path.join(settings.BASE_DIR, 'logs', settings.LOG_TYPES[log_type])
    # print(log_path) # for test
    fh = logging.FileHandler(log_path)
    fh.setLevel(settings.LOG_LEVEL)

    formatter = logging.Formatter('%(asctime)s\t%(name)s\t%(levelname)s\t%(message)s')

    ch.setFormatter(formatter)
    fh.setFormatter(formatter)

    logger.addHandler(ch)
    logger.addHandler(fh)

    return logger


if __name__ == '__main__':
    get_logger('transaction').critical('test transaction message')
