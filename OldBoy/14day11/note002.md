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

string操作:
`set(name, value, ex=None, px=None, nx=False, xx=False)``
Set the value at key ``name`` to ``value``
    ``ex`` sets an expire flag on key ``name`` for ``ex`` seconds.
    ``px`` sets an expire flag on key ``name`` for ``px`` milliseconds.
    ``nx`` if set to True, set the value at key ``name`` to ``value`` if it
        does not already exist.
    ``xx`` if set to True, set the value at key ``name`` to ``value`` if it
        already exists.
`setnx(name, value)`
Set the value of key ``name`` to ``value`` if key doesn't exist

`setex(name, value, time)`
    Set the value of key ``name`` to ``value`` that expires in ``time``
    seconds. ``time`` can be represented by an integer or a Python
    timedelta object.

`psetex(name, time_ms, value)`
    Set the value of key ``name`` to ``value`` that expires in ``time_ms``
    milliseconds. ``time_ms`` can be represented by an integer or a Python
    timedelta object

`mset(*args, **kwargs)`
    Sets key/values based on a mapping. Mapping can be supplied as a single
    dictionary argument or as kwargs.
`get(name)`
    Return the value at key ``name``, or None if the key doesn't exist

`mget(keys, *args)`
    Returns a list of values ordered identically to ``keys``

`getset(name, value)`
    Sets the value at key ``name`` to ``value``
    and returns the old value at key ``name`` atomically.

`getrange(key, start, end)`
    Returns the substring of the string value stored at ``key``,
    determined by the offsets ``start`` and ``end`` (both are inclusive)

`setrange(name, offset, value)`
    Overwrite bytes in the value of ``name`` starting at ``offset`` with
    ``value``. If ``offset`` plus the length of ``value`` exceeds the
    length of the original value, the new value will be larger than before.
    If ``offset`` exceeds the length of the original value, null bytes
    will be used to pad between the end of the previous value and the start
    of what's being injected.
    Returns the length of the new string.

`setbit(name, offset, value)``
    Flag the ``offset`` in ``name`` as ``value``. Returns a boolean
    indicating the previous value of ``offset``.
    把一个数据的二进制位看成一个列表, 存储序列和True和False(1和0).
    mysql一张表超过500万条数据就慢了.

`getbit(name, offset)`
    Returns a boolean indicating the value of ``offset`` in ``name``

`bitcount(key, start=None, end=None)`
    Returns the count of set bits in the value of ``key``.  Optional
    ``start`` and ``end`` paramaters indicate which bytes to consider    

`strlen(name)`
    Return the number of bytes stored in the value of ``name``

`incr(name, amount=1)`
    Increments the value of ``key`` by ``amount``.  If no key exists,
    the value will be initialized as ``amount``

`incrbyfloat(name, amount=1.0)`
    Increments the value at key ``name`` by floating ``amount``.
    If no key exists, the value will be initialized as ``amount``

`decr(name, amount=1)`
    Decrements the value of ``key`` by ``amount``.  If no key exists,
    the value will be initialized as 0 - ``amount``

`append(key, value)`
    Appends the string ``value`` to the value at ``key``. If ``key``
    doesn't already exist, create it with a value of ``value``.
    Returns the new length of the value at ``key``.


hash操作:
