#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''
ANSI 颜色 转移序列
转义序列就是一个让 shell 执行一个特殊步骤的控制指令。 转义序列通常都是以 ESC 开头（这也是它的命名原因）。 
\033[31;5m 是转义序列，用于控制终端的。转义序列以"\033["两个字符开头，\033是ESC键的编码。
0（黑色）、1（红色）、2（绿色）、 3（黄色）、4（蓝色）、5（洋红）、6（青色）、7（白色）。
3开头是字体颜色4开头是背景颜色9开头是底色
显示方式           意义
-------------------------
0                终端默认设置
1                高亮显示
4                使用下划线
5                闪烁
7                反白显示
8                不可见
22               正常
\33[显示方式;前景色;背景色m(顺序没用,033和33一样的)

控制代码:
\33[nA 光标上移n行 
\33[nB 光标下移n行 
\33[nC 光标右移n行 
\33[nD 光标左移n行 
\33[y;xH 设置光标位置 
\33[2J 清屏 
\33[K 清除从光标到行尾的内容 
\33[s 保存光标位置 
\33[u 恢复光标位置 
\33[?25l 隐藏光标 
\33[?25h 显示光标 
'''

for i in range(8):
    print("\033[3%s;1m●\033[0m" % (i,))

for i in range(8):
    print("\033[4%s;1m●\033[0m" % (i,))

for i in range(8):
    print("\033[0;3%s;4%sm●\033[0m" % (i, i,))

class Logger:                                                                       
        HEADER = '\033[95m'
        OKBLUE = '\033[94m'
        OKGREEN = '\033[92m'
        WARNING = '\033[93m'
        FAIL = '\033[91m'
        ENDC = '\033[0m'
        @staticmethod                                                               
        def log_normal(info):                                                       
                print(Logger.OKBLUE + info + Logger.ENDC)
        @staticmethod                                                               
        def log_high(info):                                                         
                print(Logger.OKGREEN + info + Logger.ENDC)
        @staticmethod                                                               
        def log_fail(info):                                                         
                print(Logger.FAIL + info + Logger.ENDC)
                
Logger.log_normal("This is a normal message!") 
Logger.log_fail("This is a fail message!") 
Logger.log_high("This is a high-light message!")
