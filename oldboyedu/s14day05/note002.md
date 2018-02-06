#标准库常用模块
http://www.cnblogs.com/alex3714/articles/5161349.html
##时间相关模块
time & datetime
###time模块
1. 时间戳,time.time()
2. 格式化的时间字符串,time.ctime()
3. 元组time.struct_time, 九个元素,time.localtime()
转换
`字符串格式化的时间--time.strptime()-->元组--time.mktime()-->时间戳`
`字符串格式化的时间<--time.strftime()--元组<--time.gmtime()和time.localtime()--时间戳`
time.gmtime(stamp_time)->struct_time 无参数返回当前时间的世界标准时间的元组.
time.localtime(stamp_time)->struct_time返回当前时间的本地时间的元组.
time.mktime(struct_time)->stamp_time 返回元组时间的时间戳.

time.strftime(format, struct_time)->string_time.(f是format)格式化输出元组时间
time.strptime(string_time, format)->struct_time.(p是parse)解析字符串时间

###datetime模块
datetime.datetime.now()当前时间
datetime.timedelta()时间增量, 默认为天.

##random
random.random()
random.randint()
random.randrange()
random.choice()
random.sample()
random.uniform()
random.shuffle()
```
import random


def get_captcha(n):
    captcha = ''
    for i in range(n):
        ran = random.randrange(n)
        if ran == i:
            ran = chr(random.randint(65, 90))
        else:
            ran = random.randrange(10)
        captcha += str(ran)
    return captcha

a = get_captcha(9)
print(a)
```
##os
os.getcwd()
os.chdir()
os.curdir
os.pardir
os.makedirs() 递归地创建目录
os.removedirs() 递归地删除空目录
os.mkdir()
os.rmdir()
os.listdir()
os.remove()
os.rename()
os.stat()
os.sep
os.linesep
os.pathsep
os.name
os.system()
os.environ
os.path.abspath()
os.path.split()
os.path.dirname()
os.path.basename()
os.path.exists()
os.path.isabs()
os.path.isfile()
os.path.isdir()
os.path.join()
os.path.getatime()
os.path.getmtime()


##sys
sys.argv           命令行参数List，第一个元素是程序本身路径
sys.exit(n)        退出程序，正常退出时exit(0)
sys.version        获取Python解释程序的版本信息
sys.maxsize         最大的Int值
sys.path           返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
sys.platform       返回操作系统平台名称
sys.stdout.write('please:')
val = sys.stdin.readline()[:-1]

##shutil
高级的 文件、文件夹、压缩包 处理模块
shutil.copyfileobj(fsrc, fdst[, length])
将文件内容拷贝到另一个文件中，可以部分内容
shutil.copyfile(src, dst)
拷贝文件
shutil.copymode(src, dst)
仅拷贝权限。内容、组、用户均不变
shutil.copystat(src, dst)
拷贝状态的信息，包括：mode bits, atime, mtime, flags
shutil.copy(src, dst)
拷贝文件和权限
shutil.copy2(src, dst)
拷贝文件和状态信息
shutil.ignore_patterns(*patterns)
shutil.copytree(src, dst, symlinks=False, ignore=None)
递归的去拷贝文件
shutil.rmtree(path[, ignore_errors[, onerror]])
递归的去删除文件
shutil.move(src, dst)
递归的去移动文件
shutil.make_archive(base_name, format,...)
创建压缩包并返回文件路径，例如：zip、tar
base_name： 压缩包的文件名，也可以是压缩包的路径。只是文件名时，则保存至当前目录，否则保存至指定路径，
如：www                        =>保存至当前路径
如：/Users/wupeiqi/www =>保存至/Users/wupeiqi/
format：	压缩包种类，“zip”, “tar”, “bztar”，“gztar”
root_dir：	要压缩的文件夹路径（默认当前目录）
owner：	用户，默认当前用户
group：	组，默认当前组
logger：	用于记录日志，通常是logging.Logger对象

#json & pickle(泡菜)
用于序列化的两个模块

json，用于字符串 和 python数据类型间进行转换
pickle，用于python特有的类型 和 python的数据类型间进行转换
Json模块提供了四个功能：dumps、dump、loads、load

pickle模块提供了四个功能：dumps、dump、loads、load


##shelve
基于键值对的持久化模块, 是对pickle的更高级的包装
```
import shelve
 
d = shelve.open('shelve_test') #打开一个文件
 
class Test(object):
    def __init__(self,n):
        self.n = n
 
 
t = Test(123) 
t2 = Test(123334)
 
name = ["alex","rain","test"]
d["test"] = name #持久化列表
d["t1"] = t      #持久化类
d["t2"] = t2
 
d.close()
```
##xml处理
xml协议在各个语言里的都 是支持的，在python中可以用以下模块操作xml,然而生成xml是单行模式, 所以并没有什么卵用了. 

```
import xml.etree.ElementTree as ET


tree = ET.parse("xmltest.xml")
root = tree.getroot()
print(root.tag)
 
#遍历xml文档
for child in root:
    print(child.tag, child.attrib)
    for i in child:
        print(i.tag,i.text)
 
#只遍历year 节点
for node in root.iter('year'):
    print(node.tag,node.text)
```
##yaml处理
http://pyyaml.org/wiki/PyYAMLDocumentation 
##configparser
用于生成和修改常见配置文档，当前模块的名称在 python 3.x 版本中变更为 configparser。

```
import configparser
 
config = configparser.ConfigParser()
config["DEFAULT"] = {'ServerAliveInterval': '45',
                      'Compression': 'yes',
                     'CompressionLevel': '9'}
 
config['bitbucket.org'] = {}
config['bitbucket.org']['User'] = 'hg'
config['topsecret.server.com'] = {}
topsecret = config['topsecret.server.com']
topsecret['Host Port'] = '50022'     # mutates the parser
topsecret['ForwardX11'] = 'no'  # same here
config['DEFAULT']['ForwardX11'] = 'yes'
with open('example.ini', 'w') as configfile:
   config.write(configfile)
```
##hashlib
用于加密相关的操作，3.x里代替了md5模块和sha模块，主要提供 SHA1, SHA224, SHA256, SHA384, SHA512 ，MD5 算法

```
import hashlib
 
m = hashlib.md5()
m.update(b"Hello")
m.update(b"It's me")
print(m.digest())
m.update(b"It's been a long time since last time we ...")
 
print(m.digest()) #2进制格式hash
print(len(m.hexdigest())) #16进制格式hash
```
subprocess
logging模块
##re正则表达式
常用正则表达式符号

```
'.'     默认匹配除\n之外的任意一个字符，若指定flag DOTALL,则匹配任意字符，包括换行
'^'     匹配字符开头，若指定flags MULTILINE,这种也可以匹配上(r"^a","\nabc\neee",flags=re.MULTILINE)
'$'     匹配字符结尾，或e.search("foo$","bfoo\nsdfsf",flags=re.MULTILINE).group()也可以
'*'     匹配*号前的字符0次或多次，re.findall("ab*","cabb3abcbbac")  结果为['abb', 'ab', 'a']
'+'     匹配前一个字符1次或多次，re.findall("ab+","ab+cd+abb+bba") 结果['ab', 'abb']
'?'     匹配前一个字符1次或0次
'{m}'   匹配前一个字符m次
'{n,m}' 匹配前一个字符n到m次，re.findall("ab{1,3}","abb abc abbcbbb") 结果'abb', 'ab', 'abb']
'|'     匹配|左或|右的字符，re.search("abc|ABC","ABCBabcCD").group() 结果'ABC'
'(...)' 分组匹配，re.search("(abc){2}a(123|456)c", "abcabca456c").group() 结果 abcabca456c
 
 
'\A'    只从字符开头匹配，re.search("\Aabc","alexabc") 是匹配不到的
'\Z'    匹配字符结尾，同$
'\d'    匹配数字0-9
'\D'    匹配非数字
'\w'    匹配[A-Za-z0-9]
'\W'    匹配非[A-Za-z0-9]
'\s'    匹配空白字符、\t、\n、\r , re.search("\s+","ab\tc1\n3").group() 结果 '\t'
 
'(?P<name>...)' 分组匹配
```
最实用匹配,匹配结果直接为字典.
```
re.search("(?P<province>[0-9]{4})(?P<city>[0-9]{2})(?P<birthday>[0-9]{4})","371481199306143242").groupdict("city") 
结果{'province': '3714', 'city': '81', 'birthday': '1993'}
```
最常用的匹配语法

```
re.match 从头开始匹配,很少用,基本都是其他四个
re.search 匹配包含
re.findall 把所有匹配到的字符放到以列表中的元素返回
re.split 以匹配到的字符当做列表分隔符
re.sub      匹配字符并替换
```

反斜杠的困扰
与大多数编程语言相同，正则表达式里使用"\"作为转义字符，这就可能造成反斜杠困扰。假如你需要匹配文本中的字符"\"，那么使用编程语言表示的正则表达式里将需要4个反斜杠"\\\\"：前两个和后两个分别用于在编程语言里转义成反斜杠，转换成两个反斜杠后再在正则表达式里转义成一个反斜杠。Python里的原生字符串很好地解决了这个问题，这个例子中的正则表达式可以使用r"\\"表示。同样，匹配一个数字的"\\d"可以写成r"\d"。有了原生字符串，你再也不用担心是不是漏写了反斜杠，写出来的表达式也更直观。
\不能再结尾, 需要匹配的字符串前面也要加r

仅需了解的几个匹配模式

```
re.I(re.IGNORECASE): 忽略大小写（括号内是完整写法，下同）
M(MULTILINE): 多行模式，改变'^'和'$'的行为（参见上图）
S(DOTALL): 点任意匹配模式，改变'.'的行为
```
需要掌握re的四个常用方法, 以及常用正则语法.

