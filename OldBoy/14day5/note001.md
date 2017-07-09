#模块
##定义:
模块，用一砣代码实现了某个功能的代码集合。 

类似于函数式编程和面向过程编程，函数式编程则完成一个功能，其他代码用来调用即可，提供了代码的重用性和代码间的耦合。而对于一个复杂的功能来，可能需要多个函数才能完成（函数又可以在不同的.py文件中），n个 .py 文件组成的代码集合就称为模块。

如：os 是系统相关的模块；file是文件操作相关的模块

包, 用来逻辑上组织模块.
##导入方法(使用方法)
###import module_name, modules_name
直接导入
###from module_name import function_name, functions_name
只导入需要的方法
###from module_name import function_name as name
导入需要的方法并自定义标识

##import本质(路径搜索和搜索路径)
把python文件解释一遍, 加载模块中的方法到命名空间.
找到模块文件并执行, 搜索sys.path中的路径, 需要导入哪个模块, 就将其目录append, 或者insert到sys.path列表中.
导入包的本质是执行包下的__init__.py文件
##导入优化
频繁使用的方法使用from导入可避免多次路径搜索
##模块的分类
模块分为三种：

自定义模块
内置标准模块（又称标准库）
开源模块

常用标准库:
time &datetime模块
random
os
sys
shutil
json & picle
shelve
xml处理
yaml处理
configparser
hashlib
subprocess
logging模块
re正则表达式


