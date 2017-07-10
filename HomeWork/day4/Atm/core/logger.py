#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import logging
import time

logger = logging.getLogger('TEST-LOG')
logger.setLevel(logging.DEBUG)

ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

fh = logging.FileHandler('test.log')
fh.setLevel(logging.WARNING)

formatter = logging.Formatter("")

ch.setFormatter(formatter)
fh.setFormatter(formatter)

logger.addHandler(ch)
logger.addHandler(fh)

logger.critical(time.ctime())