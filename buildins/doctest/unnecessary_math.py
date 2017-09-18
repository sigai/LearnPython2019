'''
这个例子展示如何在源码中嵌入doctest用例。
'>>>' 开头的行就是doctest测试用例。
不带 '>>>' 的行就是测试用例的输出。
如果实际运行的结果与期望的结果不一致，就标记为测试失败。
'''
def multiply(a, b):
    """
    >>> multiply(4, 3)
    12
    >>> multiply('a', 3)
    'aaa'
    """
    return a * b
if __name__=='__main__':
    # import doctest
    # doctest.testmod(verbose=True)
    print(multiply('fuck\n', 3))

