#模块初识

Python的强大之处在于他有非常丰富和强大的标准库和第三方库，几乎你想实现的任何功能都有相应的Python库支持，以后的课程中会深入讲解常用到的各种库，现在，我们先来象征性的学2个简单的。
sys(c语言内置模块没有py文件)
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

print(sys.argv)


#输出
$ python test.py helo world
['test.py', 'helo', 'world']  #把执行脚本时传递的参数获取到了
```
sys.argv `参数`
sys.path `环境变量`
os
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

os.system("df -h") #调用系统命令
```
os.system() 执行系统命令，直接输出执行结果，返回执行是否成功。
os.popen() 执行系统命令，反回执行结果保存到内存中需要read()方法读取内容。
完全结合一下　
```
import os,sys

os.system(''.join(sys.argv[1:])) #把用户的输入的参数当作一条命令交给os.system来执行

```
##自己写个模块

python tab补全模块
*for mac*
```
import sys
import readline
import rlcompleter

if sys.platform == 'darwin' and sys.version_info[0] == 2:
    readline.parse_and_bind("bind ^I rl_complete")
else:
    readline.parse_and_bind("tab: complete")  # linux and python3 on mac

```
*for linux*
```
#!/usr/bin/env python
# python startup file
import sys
import readline
import rlcompleter
import atexit
import os
# tab completion
readline.parse_and_bind('tab: complete')
# history file
histfile = os.path.join(os.environ['HOME'], '.pythonhistory')
try:
    readline.read_history_file(histfile)
except IOError:
    pass
atexit.register(readline.write_history_file, histfile)
del os, histfile, readline, rlcompleter

```
你会发现，上面自己写的tab.py模块只能在当前目录下导入，如果想在系统的何何一个地方都使用怎么办呢？ 此时你就要把这个tab.py放到python全局环境变量目录里啦，基本一般都放在一个叫 `Python/2.7/site-packages` 目录下，这个目录在不同的OS里放的位置不一样，用 `print(sys.path)` 可以查看python环境变量列表。

#.pyc是个什么鬼？
PyCodeObject和pyc文件
PyCodeObject是Python编译器编译成的结果，当python程序运行时，编译的结果则是保存在位于内存中的PyCodeObject中，当Python程序运行结束时，Python解释器则将PyCodeObject写回到pyc文件中。
pyc文件其实是PyCodeObject的一种持久化保存方式。

#数据类型初识
##数字
int，float，
##布尔值
##字符串
##列表
##元组
##字典

#入门知识拾遗
##bytes类型
字符串可以编码成字节包，而字节包可以解码成字符串。编码是一种用二进制数据表示抽象字符的方式。编码是这个转换过程中至关重要的一部分。离了编码，bytes对象b'\xa420'只是一堆比特位而已。编码赋予其含义。采用不同的编码，这堆比特位的含义就会大不同:


##三元运算
`result = 值1 if 条件 else 值2`
如果条件为真：result = 值1
如果条件为假：result = 值2

##进制
二进制，01
八进制，01234567
十进制，0123456789
十六进制，0123456789ABCDEF
二进制到16进制换
http://jingyan.baidu.com/album/47a29f24292608c0142399cb.html?picindex=1
