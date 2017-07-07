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

