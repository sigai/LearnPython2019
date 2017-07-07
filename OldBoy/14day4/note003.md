#内置函数
##all(iterable)
如果所有元素都是`True`返回`True`

##any(iterable)
如果有一个元素为`True`返回`True`

##ascii(object)
返回对象的可打印的表现形式，类似repr().

##bin(x)
把十进制整型转换为二进制字符串。

##bool([x])
返回布尔值

##bytearray([source[, encoding[, errors]]])
字节数组，返回一个新的字节数组。
str不可变 bytearray可变

##bytes([source[, encoding[, errors]]])
返回一个新的字节对象。

##callable(object)
返回`True`如果对象是可调用的，即它的类实现了__call__()方法。如果返回`True`也可能调用失败，不过返回`False`肯定无法调用，class是可调用的，返回一个新的实例。

##chr(i)
返回Unicode中整型i对应的字符串。i的有效值为0到1114111(0x10FFFF)， 无效返回`ValueError`。

##classmethod(function)
返回类方法即函数。

##compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)
把源代码编译成代码或者AST对象

##complex([real[, imag]])
复数

##delattr(object, name)
删除

##dict(\*\*kwarg)
字典

##dir([object])
不带参数的返回当前命名空间的变量名的列表，带参数返回对象的有效属性。

##divmod(a, b)
整数除法，返回商和余数组成的元组。

##enumerate(iterable, start=0)
返回一个enumeration对象。

##eval(expression, globals=None, locals=None)
可执行字符串形式的py语句。

##exec(object[, globals[, locals]])
可执行编译的pycode对象，也可执行字符串形式的py代码或语句。

##filter(function, iterable)
返回按照function过滤iterable的结果。
匿名函数 lambda
map, functools.reduce

##float([x])
转换为float类型。

##format(value[, format_spec])
字符串格式化。

##frozenset([iterable])
不可变集合

##getattr(object, name[, default])
返回对象的响应属性。

##globals()
返回当前模块的全局变量组成的字典。

##hasattr(object, name)
判断对象是否有相应的属性。

##hash(object)
返回对象的散列值，如果对象可散列的话。

##help([object])
进入内置帮助系统。

##hex(x)
转换十进制整数为十六进制小写字符串。

##id(object)
返回对象的唯一身份证明，一个唯一的整数。

##input([prompt])
获取用户标准输入。

##int(x=0)
整型

##isinstance(object, classinfo)
如果object是classinfo类型则返回`True`。

##issubclass(class, classinfo)
判断class是否是classinfo的子类，是返回`True`。

##iter(object[, sentinel])
返回一个迭代器。

##len(s)
返回对象的长度，调用对象的__len__()方法

##list([iterable])
列表

##locals()
字典形式返回当前状态的局部变量。

##map(function, iterable, ...)
映射。

##max(iterable, \*[, key, default])
##max(arg1, arg2, \*args[, key])
##min(iterable, \*[, key, default])
##min(arg1, arg2, \*args[, key])
返回最大值。

##memoryview(obj)
返回memory view对象

##next(iterator[, default])
返回迭代器的__next__()方法返回的值。

##object
基类

##oct(x)
十进制转八进制

##open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
打开文件并返回一个文件对象。

##ord(c)
返回str状态的单个Unicode字符的整型表示。

##pow(x, y[, z])
返回x的y次方。

##print(\*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
打印对象到file文本流，用sep做分隔符，end结尾。

##property(fget=None, fset=None, fdel=None, doc=None)
定义属性

##range(stop)
##range(start, stop[, step])
序列迭代器。

##repr(object)
对象的字符串表现形式，面对程序员，方便调试。

##reversed(seq)
逆序序列。

##round(number[, ndigits])
四舍五入。

##set([iterable])
集合。

##setattr(object, name, value)
为对象设置属性。

##slice(stop)
##slice(start, stop[, step])
切片。

##sorted(iterable\[, key\]\[, reverse\])
排序

##staticmethod(function)
静态方法。

##str(object='')
字符串。

##sum(iterable[, start])
求和。

##super([type[, object-or-type]])
返回父类。

##tuple([iterable])
元组。

##class type(object)
##class type(name, bases, dict)
查看对象的类型。

##vars([object])
字典的形式返回对象的变量，给IDE用的。

##zip(\*iterables)
返回所有可迭代对象的迭代器。

##__import__(name, globals=None, locals=None, fromlist=(), level=0)
反射，字符串的形式导入模块。
