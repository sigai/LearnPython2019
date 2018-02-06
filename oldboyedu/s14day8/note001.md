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

#FTP
第一次确认传输文件的大小
客户端根据文件大小判断最后一次接收大小

#socketserver

1. 创建一个请求处理类 继承BaseRequestHandler 并重写handle()方法, 处理所有请求
1. 实例化需要的server类, 并把地址和请求处理类传递给它.
1. 调用server_forever()方法处理所以请求
1. server_close()关闭服务
