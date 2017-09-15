js的老师叫尚泽凯

#路由系统 URL
正则匹配  //无参数
正则分组  //位置参数
(?P<name>{paten}) //关键字参数情况

##命名url路由
对URL路由关系进行命名, 之后可以根据此名称生成想要的URL
urls.py中urlpatterns的url函数设置name参数
action="{% url "name" %}"
action="{% url "name" argument %}"      //用来对应url路由中的分组

from django.urls import reverse
reverse('name', args=(argument,))   //生成url

reverse('name', kwargs={})

request.path_info       //当前页面url

##路由分发
include()
from django.conf.urls import include
url(r"url", include("app.urls"))

视图
request.POST
request.GET
request.FILES   //enctype
get()
getlist()
fbv cbv
function base view
class base view
from django.view import View
继承View实现get, post方法

模板
#ORM操作
select * from table where id > 1
models.tb.objects.filter(id__gt = 1)
models.tb.objects.filter(id = 1)
models.tb.objects.filter(id__lt = 1)

code first   db first
from django.db import models
class TableName(models.Model):

  models.CharField(max_length=32)

更改默认数据库在settings.py中
https://docs.djangoproject.com/en/1.11/ref/settings/#databases

settings中INSTALLED_APPS添加应用才能识别
makemigrations创建数据库操作py文件
migrate进行数据库操作

默认MySQLdb模块,添加__init__.py
import pymysql
pymysql.install_as_MySQLdb()

#orm操作
from appname import models

##增
models.TableName.objects.create()

obj = models.TableName.objects()
obj.save()

#查
models.TableName.objects.all()
models.TableName.objects.filter()

#删
models.TableName.objects.all().delete()

#改
models.TableName.objects.all().update()

objects是TableName的对象列表
models.TableName.objects.filter().first()   //登陆验证主要使用first
models.TableName.objects.filter().count()


#模版语言
索引一律是点号加索引的形式, 不能有括号
字典数据在模板中的遍历
.keys
.values
.items
同python字典
