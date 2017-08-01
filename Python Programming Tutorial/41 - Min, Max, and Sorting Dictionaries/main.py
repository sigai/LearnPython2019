#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

stocks = {
    'GOOG': 543,
    'APLE': 676,
    'YHOO': 897,
    'FB': 985
}

stock_z = zip(stocks.values(),stocks.keys())
print(sorted(stock_z))