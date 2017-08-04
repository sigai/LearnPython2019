#redis

简单的key-value的缓存系统.

SET key value [EX seconds] [PX milliseconds] [NX|XX]
Set the string value of a key

KEYS pattern
Find all keys matching the given pattern

SETEX key seconds value
Set the value and expiration of a key

python模块redis实现用python操作redis
(返回的都是bytes类型, python3中一切socket相关的数据都是bytes类型)
1. 操作模式
redis-py提供两个类Redis和StrictRedis用于实现Redis的命令，StrictRedis用于实现大部分官方的命令，并使用官方的语法和命令，Redis是StrictRedis的子类，用于向后兼容旧版本的redis-py。
2. 连接池
redis-py使用connection pool来管理对一个redis server的所有连接，避免每次建立、释放连接的开销。默认，每个Redis实例都会维护一个自己的连接池。可以直接建立一个连接池，然后作为参数Redis，这样就可以实现多个Redis实例共享一个连接池。
3. 操作
- string操作
- hash操作
- list操作
- set操作
- sort set操作
4. 管道
5. 发布/订阅

#string操作:
`set(name, value, ex=None, px=None, nx=False, xx=False)`
Set the value at key ``name`` to ``value``
设置key `name` 的 value为 `value`, 成功返回True, 失败返回False.
    ``ex`` sets an expire flag on key ``name`` for ``ex`` seconds.
    `ex`参数为key `name` 设置一个超时秒数标识, 过了超时时间, key `name`会被删除. 期间会阻塞.
    ``px`` sets an expire flag on key ``name`` for ``px`` milliseconds.
    `px`参数同`ex`, 时间单位为毫秒(千分之一秒).
    ``nx`` if set to True, set the value at key ``name`` to ``value`` if it
        does not already exist.
    `nx`参数如果指定为True, 只有在`name` key不存在的情况下, 它才会被设置为`value`. 设置成功返回True, 失败返回False.
    ``xx`` if set to True, set the value at key ``name`` to ``value`` if it
        already exists.
    `xx`参数如果指定为True, 只有在`name` key存在的情况下, 它才会被设置为`value`. 设置成功返回True, 失败返回False.
`setnx(name, value)`
Set the value of key ``name`` to ``value`` if key doesn't exist
在`name` key不存在的情况下, 设置`name`的值为`value`, 返回True, 否则返回False.

`setex(name, value, time)`
    Set the value of key ``name`` to ``value`` that expires in ``time``
    seconds. ``time`` can be represented by an integer or a Python
    timedelta object.
    设置`name`的值为`value`, 有效时间为`time`秒. `time`参数可以是一个整数, 也可以是Python的timedelta对象.

`psetex(name, time_ms, value)`
    Set the value of key ``name`` to ``value`` that expires in ``time_ms``
    milliseconds. ``time_ms`` can be represented by an integer or a Python
    timedelta object.
    设置`name`的值为`value`, 有效时间为`time_ms`毫秒. `time_ms`参数可以是整数或者Python的timedelta对象.

`mset(*args, **kwargs)`
    Sets key/values based on a mapping. Mapping can be supplied as a single
    dictionary argument or as kwargs.
    根据映射关系设置键值对. 映射可以是一个简单的字典参数, 或者关键字参数.
    
`get(name)`
    Return the value at key ``name``, or None if the key doesn't exist
    返回`name`对应的值, 如果`name`不存在则返回None.

`mget(keys, *args)`
    Returns a list of values ordered identically to ``keys``
    返回所有keys参数对应的值的列表.

`getset(name, value)`
    Sets the value at key ``name`` to ``value``
    and returns the old value at key ``name`` atomically.
    设置`name`的值为`value`, 同时自动返回`name`原来的值.
    
`getrange(key, start, end)`
    Returns the substring of the string value stored at ``key``,
    determined by the offsets ``start`` and ``end`` (both are inclusive)
    返回key对应的值的子字符串. 由参数start和end决定子字符串的开始和结束, 包含两端的字符.
`setrange(name, offset, value)`
    Overwrite bytes in the value of ``name`` starting at ``offset`` with
    ``value``. If ``offset`` plus the length of ``value`` exceeds the
    length of the original value, the new value will be larger than before.
    If ``offset`` exceeds the length of the original value, null bytes
    will be used to pad between the end of the previous value and the start
    of what's being injected.
    Returns the length of the new string.
    用value的值覆盖name的对应值从offset起始位置开始替换. 如果起始位置加上value的值的长度大于原始值的长度, 最终值的长度就会边长. 如果起始位置offset超过原始值的长度, 中间将会用`null`字符填充.
    返回值为最终字符串的长度.

`setbit(name, offset, value)`
    Flag the ``offset`` in ``name`` as ``value``. Returns a boolean
    indicating the previous value of ``offset``.
    把name对应的值的二进制位的offset位标为value, 返回该位置原来的二进制值.
    用途: 把一个数据的二进制位看成一个列表, 存储序列和True和False(1和0).
    mysql一张表超过500万条数据就慢了.

`getbit(name, offset)`
    Returns a boolean indicating the value of ``offset`` in ``name``
    返回name对应的值的二进制的offset位置的二进制值的布尔值形式.

`bitcount(key, start=None, end=None)`
    Returns the count of set bits in the value of ``key``.  Optional
    ``start`` and ``end`` paramaters indicate which bytes to consider 
    返回key对应的值的二进制位中的1的个数. 可选参数可指定统计的起始位置.   

`strlen(name)`
    Return the number of bytes stored in the value of ``name``
    返回name对应值的字节长度.

`incr(name, amount=1)`
    Increments the value of ``key`` by ``amount``.  If no key exists,
    the value will be initialized as ``amount``
    把name对应的值增加amount, 如果name不存在, 初始name的值为amount.

`incrbyfloat(name, amount=1.0)`
    Increments the value at key ``name`` by floating ``amount``.
    If no key exists, the value will be initialized as ``amount``
    把name对应的值按浮点类型增加amount, 不过name不存在, 将name值初始化为amount.

`decr(name, amount=1)`
    Decrements the value of ``key`` by ``amount``.  If no key exists,
    the value will be initialized as 0 - ``amount``
    把name对应的值减少amount, 如果name不存在, name的值初始化为 0 - amount.

`append(key, value)`
    Appends the string ``value`` to the value at ``key``. If ``key``
    doesn't already exist, create it with a value of ``value``.
    Returns the new length of the value at ``key``.
    把value追加到key对应的值后面. 如果key不存在, 则创建一个值为value的key.
    返回值为key对应的新值的长度.


hash操作:


