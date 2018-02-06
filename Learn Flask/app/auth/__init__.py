#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"  # date: 2017/12/27
from flask import Blueprint

auth = Blueprint("auth", __name__)

from . import views