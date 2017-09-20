#补充
fileobj = request.Files.get()
fileobj.size    文件大小(字节)

urls.py 中regex的表达式要加`$`符号防止覆盖

QuerySet.values(columns) 返回字典列表

QuerySet.values_list(columns) 返回元组列表

```
__gt  大于
__lt  小于
__gte 大于等于
__lte 小于等于
```
models.TableName.objects.get()    //获取TableName单条数据对象
返回的是一个TableName数据对象, 没有数据会触发异常

QuerySet是TableName对象的集合

#外键
models.ForeignKey(to, to_field=None)

#双下__
Django中用字符串中的双下划线代用点号,
filter()中的参数,
values()参数,
values_list()参数

#forloop模板变量
是一个字典, 有六个键:

forloop.counter       //循环计数器, 从1开始
forloop.counter0      //循环计数器, 从0开始
forloop.revcounter    //循环计数器, 倒数到1为止
forloop.revcounter0   //循环计数器, 倒数到0为止
forloop.first         //本次是否是第一次循环
forloop.last          //本次是否是最后一次循环
forloop.parentloop    //上层循环对象

#$.ajax
```javascript
$.ajax({
  url:"/xxx/",      //必需。规定把请求发送到哪个 URL。
  type:"POST",
  dataType:"JSON",  //自动处理后端返回的json类型数据
  traditional:true, //可处理发送列表类型数据      
  data:{},          //可选。映射或字符串值。规定连同请求发送到服务器的数据。
  success:function(data){},      //可选。请求成功时执行的回调函数。data为json对象
  error:function(){},            //后端未返回, 请求失败时的回调函数
  })

$.get()
$.post()
```
JSON.stringify()
stringify的后缀ify/fy/ize表示使...化, 类似classify, simplify
$.("form").serialize()      //通过序列化表单值，创建 URL 编码文本字符串

obj = models.TableName.objects.create()   //返回创建的TableName数据对象



#多对多
r = models.ManyToManyField(to=TableName)
创建多对多方式:
1. 自定义关系表       //可随便自定义
2. 自动创建关系表      //只能创建两张表的一种关系

```
r.add(*args)      //添加
r.remove(*args)   //删除
r.clear(*args)    //清空
r.set(list)       //设置
```
r.all() 返回TableName的数据对象的QuerySet对象
