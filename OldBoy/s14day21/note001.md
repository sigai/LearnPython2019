#URL

```
<cms.urls.py>
url(r"^index/", views, name="idx")
<urls.py>
url(r"^cms/", include("cms.urls", namespace="app"))
```
`reverse("app:idx")`
还原出用户请求的url
namespace要不同才能还原, 视频里有出入, 可能是老师没注意


`location.href = "http://xxx.com"`
ajax执行页面跳转
ajax发送的data数据只能是表单数据, 也就是字典的值只能是数值或布尔值或者字符串,
不能是数组, 字典等容器类型, 即使设置了traditional也发送不了值是字典的data数据



#Views
- 请求的其他信息
    
    ```python
     'COOKIES',
     'FILES',                   //get()方法获取文件对象
     'GET',                     //get()方法获取值
     'META',
     'POST',                    //get()方法获取单值, getlist()方法获取列表
    
     'body',
     'build_absolute_uri',
     'close',
     'content_params',
     'content_type',
     'encoding',
     'environ',               //请求的所有信息
     'get_full_path',
     'get_host',
     'get_port',
     'get_raw_uri',
     'get_signed_cookie',
     'is_ajax',
     'is_secure',
     'method',                  //请求方式
     'parse_file_upload',
     'path',
     'path_info',               //请求的url
     'read',
     'readline',
     'readlines',
     'resolver_match',
     'scheme',
     'session',
     'upload_handlers',
     'user',
     'xreadlines'
    ```
- request.environ[key]
  所有的key:
  
    ```python
    ALLUSERSPROFILE
    APPDATA
    COMMONPROGRAMFILES
    COMMONPROGRAMFILES(X86)
    COMMONPROGRAMW6432
    COMPUTERNAME
    COMSPEC
    DEVMGR_SHOW_DETAILS
    DJANGO_SETTINGS_MODULE
    ERLANG_HOME
    HOMEDRIVE
    HOMEPATH
    INCLUDE
    LIB
    LOCALAPPDATA
    LOGONSERVER
    NUMBER_OF_PROCESSORS
    ONEDRIVE
    OS
    PATH
    PATHEXT
    PROCESSOR_ARCHITECTURE
    PROCESSOR_IDENTIFIER
    PROCESSOR_LEVEL
    PROCESSOR_REVISION
    PROGRAMDATA
    PROGRAMFILES
    PROGRAMFILES(X86)
    PROGRAMW6432
    PSMODULEPATH
    PUBLIC
    PYCHARM_HOSTED
    PYTHONIOENCODING
    PYTHONPATH
    PYTHONUNBUFFERED
    SESSIONNAME
    SYSTEMDRIVE
    SYSTEMROOT
    TEMP
    TMP
    USERDOMAIN
    USERDOMAIN_ROAMINGPROFILE
    USERNAME
    USERPROFILE
    VS71COMNTOOLS
    WINDIR
    RUN_MAIN
    SERVER_NAME
    GATEWAY_INTERFACE
    SERVER_PORT
    REMOTE_HOST
    CONTENT_LENGTH
    SCRIPT_NAME
    SERVER_PROTOCOL
    SERVER_SOFTWARE
    REQUEST_METHOD
    PATH_INFO
    QUERY_STRING
    REMOTE_ADDR
    CONTENT_TYPE
    HTTP_HOST
    HTTP_CONNECTION
    HTTP_CACHE_CONTROL
    HTTP_USER_AGENT       //用户代理, 简称UA
    HTTP_UPGRADE_INSECURE_REQUESTS
    HTTP_ACCEPT
    HTTP_DNT
    HTTP_ACCEPT_ENCODING
    HTTP_ACCEPT_LANGUAGE
    HTTP_COOKIE
    wsgi.input
    wsgi.errors
    wsgi.version
    wsgi.run_once
    wsgi.url_scheme
    wsgi.multithread
    wsgi.multiprocess
    wsgi.file_wrapper
    ```

- 装饰器
  用来做用户登陆验证
  FBV:
    直接装饰器
  CBV:
  
  ```python
    from django.utils.decorators import method_decorator
    @method_decorator(func, name="method")
  ```
    所有方法都装饰的话, 可以装饰类, 加name参数
    也可以只装饰单个方法, 或者装饰dispatch方法

#Models
- 操作
models.xxxField()的方法在创建时暂时没有验证功能, 需要在admin中或者设置时才可以
外键字段名结尾不能用`_id`结尾


#Template
- 模板语言
  for if 索引用点号 方法也用点号且不调用 keys, values, items QuerySet类型的all方法也是
  {% %} 括起来的url name values等

  自定义函数sample_tag:
  app目录下建立python包templatetags
  app需要在settings中注册
  
  ```
  from django import template
  register = template.Library()
  @register.sample_tag
  def func():
    pass
  ```
  `{% load <filename>%}`

  `{% func args %}`  //使用


- 模板继承

`{% block name %}{% endblock %}`
有以上block代码表示可以被继承


多个页面有相同结构时使用:
{% extends Template %}
继承模板(每个页面只能继承一次)
继承后,用同定义类似的代码定义填充部分


单个页面有多个组件时使用:
`{% include Template %}`
html元素(导入可多次)

`@register.filter`
最多两个参数
使用的时候用{{}}而simple_tag用{% %}且无参数个数限制
做if条件

#cookies和session


#分页
自定义
##xss
前端:
`{{ data|safe}}`
用safe内置filter处理
后端:

```
from django.utils.safestring import mark_safe
data = mark_safe(data)
```

`javascript:void(0);`或`#`在a标签中表示什么也不做
`location.href = "/"`

`@property` 静态属性

```
response = redirect("/")             //HttpResponseBase子类的方法
response.set_cookie()                //设置cookie
set_cookie(key, value='', 
            max_age=None,               //有效时限
            expires=None,               //失效时间
            path='/',                   //生效的路径,根路径所有url都能访问
            domain=None,                //生效的域名
            secure=False,               //https
            httponly=False)             //JavaScript获取不到
                   
request.COOKIES               //客户端请求的cookies是一个字典数据
request.COOKIES.get()           //获取cookie

jquery.cookies.js
$.cookie(k, v)
```
cookies加密

```
response.set_signed_cookie(salt="")
request.get_singed_cookies(salt="")
```

#Form验证


