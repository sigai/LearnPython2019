#动态导入模块`__import__`

`__import__` 只能导入顶层模块, 解释器使用的方式.

```
import importlib
importlib.import_module(str)
```
这个可以直接到导入. 官方推荐使用

#断言 assert
不成立则触发AssertError异常

#简单的ssh
坑一:长数据服务端send后会全部发送. 但是recv并不会全部接收,所以需要对比收到的数据大小, 但是len在有中文的情况下, 服务端客户端双方要保证对比一致性.

#粘包
坑二:两次send的数据会粘在一起(windows上也会的)
解决一:time.sleep(0.5)
解决二:两次send分开,加一个接收, 确认客户端收到.
