#URL

<cms.urls.py>
url(r"^index/", views, name="idx")
urls.py
url(r"^cms/", include("cms.urls", namespace="app"))

reverse("app:idx")
还原出用户请求的url


location.href = "http://xxx.com"
ajax执行页面跳转



#Views
- 请求的其他信息
'COOKIES',
 'FILES',
 'GET',
 'META',
 'POST',

 'body',
 'build_absolute_uri',
 'close',
 'content_params',
 'content_type',
 'encoding',
 'environ',               //所有信息
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

request.environ[key]
所有的key:
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


- 装饰器

#Models
- 操作



#Template
- 模板语言
- 模板继承

{% block name %}
{% endblock %}

{% extends Template %}
继承模板(每个页面只能继承一次)

{% include Template %}
html元素(导入可多次)


#cookies和session


#分页
自定义



#Form验证
