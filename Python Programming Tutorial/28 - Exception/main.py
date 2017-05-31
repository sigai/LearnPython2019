#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''异常处理'''


while True:
    print('-'*100)
    try:
        number = int(input("What's your fav number?\n"))
        print(18 / number)
    except ValueError as e:
        print("Make sure and enter a number")
    except ZeroDivisionError as e:
        print("Don't pick zero!")
    except Exception as e:
        break
    else:
        print("ALL CLEAR!!!!")
    finally:
        print('@_@')

