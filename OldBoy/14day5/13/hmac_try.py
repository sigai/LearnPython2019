#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import hmac

h = hmac.new(bytes('天王盖地虎', encoding='utf-8'),bytes('你老公在家不', encoding='utf-8'))
print(h.hexdigest())
