#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''SystemExit KeyboardInterrupt需要用BaseException捕捉'''
try:
    raise SystemExit
except BaseException as e:
    print("Want to exit? error:%s"%e)
finally:
    print("Bye")