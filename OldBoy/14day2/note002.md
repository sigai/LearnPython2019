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

#集合操作
集合是一个无序的，不重复的数据组合，它的主要作用如下：

去重，把一个列表变成集合，就自动去重了
关系测试，测试两组数据之前的交集、差集、并集等关系
常用操作

#文件操作
对文件操作流程

打开文件，得到文件句柄并赋值给一个变量
通过句柄对文件进行操作
关闭文件
```
打开文件的模式有：

r，只读模式（默认）。
w，只写模式。【不可读；不存在则创建；存在则删除内容；】
a，追加模式。【可读；   不存在则创建；存在则只追加内容；】
"+" 表示可以同时读写某个文件

r+，可读写文件。【可读；可写；可追加】
w+，写读
a+，同a
"U"表示在读取时，可以将 \r \n \r\n自动转换成 \n （与 r 或 r+ 模式同使用）

rU
r+U
"b"表示处理二进制文件（如：FTP发送上传ISO镜像文件，linux可忽略，windows处理二进制文件时需标注）

rb
wb
ab
```
##其它语法
'buffer', 'close', 'closed', 'detach', 'encoding', 'errors', 'fileno', 'flush', 'isatty', 'line_buffering', 'mode', 'name', 'newlines', 'read', 'readable', 'readline', 'readlines', 'seek', 'seekable', 'tell', 'truncate', 'writable', 'write', 'writelines'

###flush实现进度条
```
import sys, time

for i in range(10):
    sys.stdout.write("#")
    sys.stdout.flush()
    time.sleep(.1)
```

##with语句
为了避免打开文件后忘记关闭，可以通过管理上下文，即：

with open('log','r') as f:
    ...
如此方式，当with代码块执行完毕时，内部会自动关闭并释放文件资源。

在Python 2.7 后，with又支持同时对多个文件的上下文进行管理，即：
with open('log1') as obj1, open('log2') as obj2:
    pass

#字符编码与转码
http://www.cnblogs.com/yuanchenqi/articles/5956943.html
http://www.cnblogs.com/luotianshuai/articles/5735051.html
http://www.diveintopython3.net/strings.html
需知:

1.在python2默认编码是ASCII, python3里默认是unicode

2.unicode 分为 utf-32(占4个字节),utf-16(占两个字节)，utf-8(占1-4个字节)， so utf-16就是现在最常用的unicode版本， 不过在文件里存的还是utf-8，因为utf8省空间

3.在py3中encode,在转码的同时还会把string 变成bytes类型，decode在解码的同时还会把bytes变回string
