#js正则

test    判断字符串是否符合规定的正则表达式
exec    匹配获取数据

`/`开头和结尾,代表是正则表达式
test 默认需要^$表示起始和终止 类似re的search
exec 类似Python re的findall

正则分组

\b  边界
正则表达式结尾加g 表示全局(global)匹配 每次匹配返回一个 类似Python生成器
结尾加i    表示忽略大小写(ignore)
结尾加m    表示多行匹配(multiline) 该模式$匹配换行符 ^匹配行的开始

登录验证
自定义事件先执行 默认一般都是自定义事件限制性

- submit
- a

默认事件先执行

- CheckBox

表单验证
前端先检查一遍合法性减轻一部分服务器压力(减少数据库请求), 后端检查所有验证(也需要合法性验证).
利用标签的自定义属性

#前端框架选择
BootStrap   全栈
jQueryUI    后台
EasyUI   后台

BootStrap模板
#BootStrap
1. 响应式
    @media (min-width:100px;){css}
2. 图标 字体
    @font-size
3. 基本使用
    样式写在插件的css后面 绝对生效可用!important

#轮播图
bxslider.com

#WEB框架
web框架的本质是socket
Python3 中所有socket交换的数据都是bytes类型
b'' bstring 标记assic字符串为bytes类型
str.encode()方法
bytes() 内置函数


MVC Model View Controller
MTV Model Template View
实质: 数据库    模板文件    业务处理

#Django

基于MTV的WEB框架

安装
pip install django

新建项目命令
django-admin startproject <name>
运行项目
python manage.py runserver

##项目目录结构
project
    - project
        - settings.py
        - urls.py
        - wsgi.py
    - manage.py
    - db.sqlite3

project目录
保存项目的配置信息
settings.py   //配置文件
urls.py       //路由 URL对应关系
wsgi.py       //wsgi规范 uwsgi + nginx
manage.py     //管理Django程序
db

##命令
Python magane.py startapp
Python magane.py makemigrations
Python magane.py migrate

命令行运行的服务会一直运行除非结束进程, pycharm中运行的可以停止.
Pycharm运行Django项目需要设置项目然后运行项目, 而不是运行py文件.

##创建应用
Python magane.py startapp <name>

目录结构
- migrations目录        //修改表结构的记录文件
- __init__.py           //包
- admin.py              //后台管理
- apps.py               //当前应用的配置文件
- models.py             //ORM, 创建数据库表结构
- test.py               //单元测试
- views.py              //业务逻辑代码

##初始化项目的步骤:

1. 配置模板目录
`settings.py`配置文件中的`TEMPLATES`列表添加模板路径
2. 配置静态文件目录
`setting.py`最下方添加`STATICFILES_DIRS`配置元组

#Csrf
settings.py配置文件中的`MIDDLEWARE`列表
`'django.middleware.csrf.CsrfViewMiddleware'`注释掉

#获取用户post提交
request.POST
request中的所有属性方法
'COOKIES',
'FILES',
'GET',
'META',
'POST',                       //<class 'django.http.request.QueryDict'>
'body',
'build_absolute_uri',
'close',
'content_params',
'content_type',
'encoding',
'environ',
'get_full_path',
'get_host',
'get_port',
'get_raw_uri',
'get_signed_cookie',
'is_ajax',
'is_secure',
'method',
'parse_file_upload',
'path',
'path_info',
'read',
'readline',
'readlines',
'resolver_match',
'scheme',
'session',
'upload_handlers',
'user',
'xreadlines'

##返回
redirect方法 跳转
`redirect(to, *args, **kwargs)`
render方法渲染页面(封装的HttpResponse方法)
`render(request, template_name, context=None, content_type=None, status=None, using=None)`
HttpResponse是个内容是字符串的类

##模板语言
模板中{{}}中的内容会被render方法渲染


