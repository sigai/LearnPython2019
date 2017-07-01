#列表、元组操作
列表是我们最以后最常用的数据类型之一，通过列表可以对数据实现最方便的存储、修改等操作
列表方法（'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort'）
##定义列表
```
[]
list()工厂方法
```
##通过下标访问列表中的元素，下标从0开始计数
##切片:取多个元素
##追加
append
##插入
insert
##修改
##删除
remove, del, pop
##扩展
extend
##拷贝
copy
浅复制copy.xopy，[:]，list()，
深复制copy.deepcopy
##统计
count
##排序&翻转
sort
reverse
##获取下标
index
##清空
clear
##循环列表
for ... in list

#元组
元组其实跟列表差不多，也是存一组数，只不是它一旦创建，便不能再修改，所以又叫只读列表。
创建元组：tuple()，(,)
dir(tuple):'count', 'index'
##统计
count
##获取下标
index

##程序练习

程序：购物车程序

需求:

```
启动程序后，让用户输入工资，然后打印商品列表
允许用户根据商品编号购买商品
用户选择商品后，检测余额是否够，够就直接扣款，不够就提醒
可随时退出，退出时，打印已购买商品和余额
```
#字符串操作
特性：不可修改
str方法：
dir(str):'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill'
