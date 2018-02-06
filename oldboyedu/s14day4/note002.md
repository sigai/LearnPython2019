#列表生成式
[i for i in range(10)]

#生成器generator
(i for i in range(10))
.__next__()方法返回下一个元素.

a, b = b, a+b
相当于:
t = (b, a+b)
a = t[0]
b = t[1]

#yield关键字
函数中用yield变成生成器, return在异常状态下返回

#迭代器
可直接作用于for循环的类型，成为可迭代对象。
isinstance() 判断对象是否是相应的类型，Iterable，`from collections import Iterable`
实现了__next__()方法的类型，并不断反回下一个值的对象成为迭代器。生成器都是迭代器。
isinstance() 判断对象是否是相应的类型，Iterator，`from collections import Iterator`

可迭代对象变成迭代器：
iter()内置函数
