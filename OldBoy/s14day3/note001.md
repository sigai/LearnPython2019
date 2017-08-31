#集合操作
集合是一个无序的，不重复的数据组合，它的主要作用如下：

1. 去重，把一个列表变成集合，就自动去重了
1. 关系测试，测试两组数据之前的交集、差集、并集等关系
##常用操作
所有方法：
add', 'clear', 'copy', 'difference', 'difference_update', 'discard', 'intersection', 'intersection_update', 'isdisjoint', 'issubset', 'issuperset', 'pop', 'remove', 'symmetric_difference', 'symmetric_difference_update', 'union', 'update'

```
s = set([3,5,9,10])      #创建一个数值集合  
t = set("Hello")         #创建一个唯一字符的集合  

a = t | s          # t 和 s的并集   
b = t & s          # t 和 s的交集   
c = t – s          # 求差集（项在t中，但不在s中）  
d = t ^ s          # 对称差集（项在t或s中，但不会同时出现在二者中）

s.isdisjoint(set([2]))  # 如果交集为空，返回True。
```

###基本操作：  
```
t.add('x')            # 添加一项  
s.update([10,37,42])  # 在s中添加多项  
t.remove('H')        # 使用remove()可以删除一项：
len(s)              # set 的长度
  
x in s              # 测试 x 是否是 s 的成员  
x not in s          # 测试 x 是否不是 s 的成员
  
s.issubset(t)  
s <= t              # 测试是否 s 中的每一个元素都在 t 中  
s.issuperset(t)  
s >= t              # 测试是否 t 中的每一个元素都在 s 中  
s.union(t)  
s | t               # 返回一个新的 set 包含 s 和 t 中的每一个元素  
s.intersection(t)  
s & t               # 返回一个新的 set 包含 s 和 t 中的公共元素  
s.difference(t)  
s - t               # 返回一个新的 set 包含 s 中有但是 t 中没有的元素  
s.symmetric_difference(t)  
s ^ t               # 返回一个新的 set 包含 s 和 t 中不重复的元素  

s.copy()            # 返回 set “s”的一个浅复制
```

#文件操作
对文件操作流程

打开文件，得到文件句柄并赋值给一个变量
通过句柄对文件进行操作
关闭文件
```
打开文件的模式有：

r，只读模式（默认）。
w，只写模式。【不可读；不存在则创建；存在则删除内容；】
a，追加模式。【可读；不存在则创建；存在则只追加内容；】
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
'buffer'：可取值有0，1，>1三个，0代表buffer关闭（只适用于二进制模式），1代表line buffer（只适用于文本模式），>1表示初始化的buffer大小.
'close', 
'closed'： 
'~~detach'：文件编辑过程中，更改encoding(我不信)~~
'encoding'：返回文本stream编码。
'errors'：取值一般有strict，ignore，当取strict的时候，字符编码出现问题的时候，会报错，当取ignore的时候，编码出现问题，程序会忽略而过，继续执行下面的程序。
'fileno'
'flush'：刷新文件内部缓冲,直接把内部缓冲区的数据立刻写入文件, 而不是被动的等待输出缓冲区写入.
'isatty'：返回是否是终端设备。
'line_buffering', 
'mode'：文件打开模式。
'name'：文件名。
'newlines'：用于区分换行符，但是这个参数只对文本模式有效，可以取的值有None, \n, \r, ”, ‘\r\n'。
'read', 'readable', 'readline'：读到新行之前或者EOF文件结尾，如果已经是EOF返回空字符串。
'readlines'：返回stream所有行的列表。hint参数可以制定读取的行数，小于总行数则超过不分不再读取。
'seek'：更改stream位置
'seekable'：返回对象是否支持随机访问
'tell'：返回现在的stream位置
'truncate'：截断,保留文件指针的位置，默认截断tell()的位置。
'writable', 'write', 'writelines'

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

#程序练习　　

1. 程序1: 实现简单的shell sed替换功能

1. 程序2:修改haproxy配置文件 


