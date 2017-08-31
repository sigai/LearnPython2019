变量和字符编码

#变量
##声明变量
```
#_*_coding:utf-8_*_

name = "Tom"
```
上述代码声明了一个变量，变量名为： name，变量name的值为："Tom"　

##变量定义的规则：

变量名只能是 字母、数字或下划线的任意组合
变量名的第一个字符不能是数字
以下关键字不能声明为变量名
除了类名单词首字母大写其他一律小写字母，单词之间用_分割
```
['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'exec', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'not', 'or', 'pass', 'print', 'raise', 'return', 'try', 'while', 'with', 'yield']
```
_ 1、在解释器中代表交互式解释器会话中上一条执行的语句的结果。这种用法首先被标准CPython解释器采用，然后其他类型的解释器也先后采用。2、作为一个名称：这与上面一点稍微有些联系，此时作为临时性的名称使用。这样，当其他人阅读你的代码时将会知道，你分配了一个特定的名称，但是并不会在后面再次用到该名称。3、国际化：也许你也曾看到会被作为一个函数来使用。这种情况下，它通常用于实现国际化和本地化字符串之间翻译查找的函数名称，这似乎源自并遵循相应的C约定。4、使用方法可能会相互冲突，所以我们需要避免在使用作为国际化查找转换功能的代码块中同时使用作为临时名称。

##变量的赋值
```
name = "Tom"

name2 = name
print(name,name2)

name = "Jack"

print("What is the value of name2 now?")
```
变量名是数据的标识符，指向数据的标识，数据的标识是数据在内存中的位置(id内置函数返回的值)。


#字符编码
python解释器在加载 .py 文件中的代码时，会对内容进行编码
```
                    Unicode
-------------------------------------------------
∧       |decode            |encode  ∧
|encode ∨                  ∨        |decode
-------------------------------------------------
  utf-8                       GBK ...
```
ASCII、GBK、Unicode
UTF-8，是对Unicode编码的压缩和优化。
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

print "你好，世界"
```
UTF-8中存储assic码用一个字节，存储中文用三个字节。

#注释
当行注视：# 被注释内容

多行注释：""" 被注释内容 """
快捷键ctrl加问号

#用户输入输出

```
#!/usr/bin/env python
#_*_coding:utf-8_*_


name = input("What is your name?")
print("Hello " + name )
```
输入密码时，如果想要不可见，需要利用getpass 模块中的 getpass方法，即：
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import getpass

# 将用户输入的内容赋值给 name 变量
pwd = getpass.getpass("请输入密码：")

# 打印输入的内容
print(pwd)
```

##字符串格式化输出

#模块初识
内置模块，不用安装，直接import即可使用的
内置函数，不用import即可使用的

#表达式if ... else

场景一、用户登陆验证
```
# 提示输入用户名和密码

# 验证用户名和密码
#     如果错误，则输出用户名或密码错误
#     如果成功，则输出 欢迎，XXX!


#!/usr/bin/env python
# -*- coding: encoding -*-

import getpass


name = raw_input('请输入用户名：')
pwd = getpass.getpass('请输入密码：')

if name == "Tom" and pwd == "cmd":
    print("欢迎，Tom！")
else:
    print("用户名和密码错误")
```
python中用缩进表示代码块

场景二、猜年龄游戏

在程序里设定好你的年龄，然后启动程序让用户猜测，用户输入后，根据他的输入提示用户输入的是否正确，如果错误，提示是猜大了还是小了
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-


my_age = 28

user_input = int(input("input your guess num:"))

if user_input == my_age:
    print("Congratulations, you got it !")
elif user_input < my_age:
    print("Oops,think bigger!")
else:
    print("think smaller!")
```
外层变量，可以被内层代码使用
内层变量，不应被外层代码使用

#while loop
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-


count = 0
while True:
    print('count:',count)
    count = count + 1 # count += 1
else:
    print("end")
```
在 python 中，while … else 在循环条件为 false 时执行 else 语句块：
```
#!/usr/bin/env python

count = 0
while count < 5:
   print count, " is  less than 5"
   count = count + 1
else:
   print count, " is not less than 5"
```
#for loop
```
for i in range(1,10,2):
    if i>5:
        break #不往下走了,直接跳出整个loop
    print("loop:", i )
else:
    print("end")
```
当迭代的对象迭代完并为空时，位于else的子句将执行。

##break 和 continue
break 破坏本层循环
continue 跳出本次循环，继续循环下次
