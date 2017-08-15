#HTML和CSS

HTML

  -  socket客户端解析socket服务端数据的规则, 协议
  -  学习规则
    -  后台程序处理数据
        - 写html文件
        - 数据库中获取数据, 替换到模板页面中. (web框架)
  -  20个标签
  -  本地测试
    -  本地打开
    -  IDE模拟
CSS

  - 颜色
  - 位置

所有的web应用本质上是socket服务端, 浏览器是socket客户端.
HTTP连接是短连接

#编写html文件
1. Doctype告诉浏览器使用什么样的html或xhtml规范来解析html文档

    ```html
    <!DOCTYPE html>
    ```
2. html标签
    - html标签(唯一)  lang属性
    - head标签(唯一)    大脑, 除title标签外都不可见
    
    - a标签  href属性
    - meta标签    
        - charset属性
        - http-qeuiv属性  
            - < meta http-equiv=“content-type” content=“text/html;charset=utf-8”>
            - < meta http-equiv=“Refresh” Content=“30″>
            - < meta http-equiv=”Refresh“ Content=”5; Url=http://www.autohome.com.cn“ />
        - keywords属性
        - description属性
        - content属性
        - X-UA-Compatible属性
            - <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" /> 
    - title标签
    - link标签
        - ico图标 `< link rel="shortcut icon" href="image/favicon.ico">` 
    - style标签
    - script标签

    - body标签(唯一)
        - charref图标和特殊字符表示法
            - https://dev.w3.org/html5/html-author/charref 
            - `&nbsp;` 空格 `&gt;` > `&lt;` <
        - p标签   `<p></p>`段落
        - br标签 `<br />`换行 自闭和标签
        - h1 - h6标签
        - div标签
        - span标签
        - input标签   行内标签

标签分类1:
    - 自闭合标签
        - meta
        - br
        - input
    - 主动闭合标签

标签分类2:
    - 块级标签, h系列(加大加粗), p(段落), div(无属性, 白板)
    - 行内标签, 内联标签, span(无属性, 白板) a, select标签
    - br 无内容

标签属性

注释

```html
<!--注释的内容-->
```

标签可以嵌套

#标签的用途:
定位标签内容
`document.getElementById('id').innerText`
`document.getElementById('id').innerText = 'new'`

#审查元素
chrome 审查元素
    - 定位元素
    - 查看样式

#input标签
<form action='http://www.baidu.com/index' method="get">
    <input type="text"/>
    <input type="password"/>
    <input type="button" value="Login"/>
    <input type="submit" value="Login"/>
</form>

表单会收集数据放到一个字典中提交到服务器端
name属性会作为字典的key被服务器端接收

value属性在text和password类型时候提供默认值
在button和submit类型时提供按钮名称.

redio类型 单选框 name值相同为互斥 值在value中
checkbox类型 多选框 name值相同为互斥 值在value中
设置默认选中状态 添加checked属性 或checked属性设置为"checked"
结果会保存value在name中提交.

file类型
依赖表单enctype="multipart/form-data"的属性

reset类型
重置所有表单项

#提交方式
GET 数据拼接到url上, 被提交到服务器端, 其实就是get拼接之后的url, 数据在请求头中
POST 数据在请求体中

