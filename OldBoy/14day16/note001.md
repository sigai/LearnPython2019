#HTML
标签, 块级标签, 行内标签

#CSS
position
background
text-align
margin
padding
font-size
z-index
overflow
hover
opacity
folat
clear:both
line-height
border
color
display

页面布局
 主站布局
  分栏
margin:0 auto;
该标签的子标签自动居中

position:
fixed:  永远固定在窗口的指定位置
relative: 单独使用无意义, 配合absolute使用
absolute: 第一次定位根据窗口位置, 之后会可以在该位置的页面位置固定.

a. 左侧菜单跟随页面滚动
b. 左侧菜单固定, 右面内容区overflow:auto

#js
两种存在形式
js文件引入放在body的结束之前
script type='text/javascript'
局部变量和全局变量
基本数据类型
两种for循环 for(var item in [11,22,33])  i 是索引 for(var i=0;i<array.length;i++){} i也是索引.
break continue 同python
每行代码加分号
while(){}同python
控制语句 if(){}else if(){}else{}; == ===
switch(arg){case 1: pass; break; default: pass}
函数function func(args){ return res}


#函数
普通函数
匿名函数
function(){}
自执行函数
(function(arg){})(1)

#序列化
JSON.stringify() 数据转换为字符串 即序列化
JSON.parse() 字符串转换为js数据类型 即反序列化

#转义
url转义
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
字符串转义
escape()
unescape()
URLError

#cookies
requests模块

#eval
相当于python的eval和exec的合成

#时间
var d = new Date()
获取当前时间
d.getXXXX()获取时间操纵
d.setXXXX()设置时间操作

#作用域
一般编程语言以代码块{}作为作用域
python中函数作为作用域
1. javascript中函数作为作用域
2. 函数的作用域在未调用之前, 解释过程中创建.
3. 函数的作用域存在作用域链, 解释过程中创建.
4. 函数内部局部变量会提前声明

#面向对象
函数体中含有this关键字的就是类
用new语句创建实例

函数.prototype是类的原型 是一个字典

#DOM
查找:
直接查找 document.getElementById()
间接查找 document.

标签操作
tag.innertext
tag.innerHTML

input_tag.value
select_tag.value
select_tag.selectedIndex
testaera_tag.value

样式操作
tag.className
tag.classList
tag.classList.add()
tag.classList.remove()

标签对象的样式属性
tag.style

标签对象的属性操作
tag.attributes
tag.setAttribute(key, value)
tag.removeAttribute(key)

动态添加标签

字符串形式innerHtml添加标签
var tag = "<p><input type=\"text\"></p>";
document.getElementById('i1').insertAdjacentHTML('beforeEnd',tag);
'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'

标签对象形式添加
var p = document.createElement('p')
document.getElementById('i1').appendChild(p)

input标签 text类型有个placeholder属性可设置文本框默认显示

任意标签提交表单
绑定click 函数中调用表单对象的submit方法
document.getElementById('f1').submit()

其他操作:
console.log()
alert()
confirm()
location.href
location.reload()
setInterval(function, time)
clearInterval(定时器对象)
setTimeout(functions, timeout)
clearTimeout(timeout对象)

#事件
onclick, onblur, onfocus

html css js 解耦 DOM1写法
结构 样式 行为 分离的写法

事件绑定写在script标签里
onmouseover, onmouseout
