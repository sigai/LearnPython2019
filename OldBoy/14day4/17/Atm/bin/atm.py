#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
import sys
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

sys.path.append(BASE_DIR)

from core import main
from conf import settings

print("atm")