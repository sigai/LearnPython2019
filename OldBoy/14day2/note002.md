#字典操作
字典一种key - value 的数据类型
字典的特性：

dict是无序的
key必须是唯一的,so 天生去重

##字典的方法：
dir(dict):'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values'
##增加
fromkeys
##删除
clear
pop
popitem
##更改
update
##查询
get
items
values

##多级字典嵌套及操作

##循环dict
for i in dict:
    print(i)

这种循环更快，如果dict.items()数据量大的时候，会变慢

