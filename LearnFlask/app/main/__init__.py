#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"  # date: 2017/12/27
from flask import Blueprint

main = Blueprint("main", __name__)

from . import views, errors
