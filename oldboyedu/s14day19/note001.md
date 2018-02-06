js的老师叫尚泽凯

#路由系统 URL
正则匹配  //无参数 r"^index/"
正则分组  //位置参数 r"detail-(\d+).html"
(?P<name>{paten}) //关键字参数情况

##命名url路由
Django特有
对URL路由关系进行命名, 之后可以根据此名称生成想要的URL
urls.py中urlpatterns的url函数设置name参数
有了name之后就可以在views.py和模板中生成相应的URL了

action="{% url "name" %}"
action="{% url "name" argument %}"      //用来对应url路由中的分组

from django.urls import reverse
reverse('name', args=(argument,))   //生成url

reverse('name', kwargs={})

request.path_info       //当前页面url

##路由分发
include()
from django.conf.urls import include
url(r"regex", include("appname.urls"))

#视图
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

1. code first
    先写类代码, 然后根据类自动到数据库中创建表结构
2. db first
    手动创建数据库表结构, 框架自动生成类
之后都是操作类, 完成数据操作


from django.db import models
class TableName(models.Model):

  models.CharField(max_length=32)

更改默认数据库在settings.py中
https://docs.djangoproject.com/en/1.11/ref/settings/#databases

settings中INSTALLED_APPS添加应用才能识别
makemigrations创建数据库操作py文件
migrate进行数据库操作

MySQL中为Django创建数据库
`create database cmdb default charset=utf8;`
默认MySQLdb模块, 项目配置文件夹的__init__.py中添加:
import pymysql
pymysql.install_as_MySQLdb()


##增
dic = {}
models.TableName.objects.create(**dic)

obj = models.TableName.objects(**dic)
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

objects.filter()返回的是QuerySet类型
操作TableName对象元素需要迭代或者用first方法
QuerySet.query是SQL语句

##models.py操作
新增表column的时候, makemigrations的时候选择1, 然后输入默认值, 引号括起来的.
或者在参数中设置`null=True`, 即字段可以为空.

##Django的ORM数据类型
xxxField 为admin提供的
字符串
数字
时间
二进制
自增(primary_key=True)

###字段参数
null                是否可以为空
default             默认值
primary_key         是否为主键
db_column           列名
db_index            是否是索引
unique              唯一索引
unique_for_date
unique_for_month
unique_for_year
auto_now            更新时, 需要对象调用sava方法才能激活更新
auto_now_add        创建时,
choices             在admin中显示下拉框, 避免连表查询
blank               在admin中是否可以为空
verbose_name        在admin中显示中文
editable            在admin中是否显示(是否可编辑)
error_messages      错误提示
help_text           输入框下方显示提示信息
validators          自定义验证

##外键
FK = models.ForeignKey("TableName", to_field="PK", default=PK_value)
obj.FK_id
obj.FK      //对象



#模版语言
索引一律是点号加索引的形式, 不能有括号
字典数据在模板中的遍历
.keys
.values
.items
同python字典


