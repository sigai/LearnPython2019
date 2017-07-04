#字符编码与转码
http://www.cnblogs.com/yuanchenqi/articles/5956943.html
http://www.cnblogs.com/luotianshuai/articles/5735051.html
http://www.diveintopython3.net/strings.html
需知:

1.在python2默认编码是ASCII, python3里默认是unicode

2.unicode 分为 utf-32(占4个字节),utf-16(占两个字节)，utf-8(占1-4个字节)， so utf-16就是现在最常用的unicode版本， 不过在文件里存的还是utf-8，因为utf8省空间

3.在py3中encode,在转码的同时还会把string 变成bytes类型，decode在解码的同时还会把bytes变回string
#函数
编程方式：面向对象class、面向过程def(无返回值)、函数式编程def
函数定义：函数是逻辑结构化和过程化的一种编程方法。
def test(x):
    "definition"
    x+=1
    return x
def：定义关键字
test：函数名
()：定义形式参数
冒号：代码块开始
''''''：文档描述
return：定义返回值

##使用函数
1、代码重复利用。
2、方便更新功能，扩展性好。
3、保持一致性。


