#javascript
script标签
1. 标签内写脚本
2. src属性设置脚本文件位置

type属性
默认值text/javascript

script标签放在body标签最下位置, 可以先渲染页面, 脚本文件慢慢加载.


#测试代码
chrome的console里测试js代码

#注释
`//`单行注释
`/**/`多行注释

#变量声明
变量名直接赋值 声明的是全局变量
var 变量名 局部变量

应该默认使用局部变量的形式定义所有变量, 在需要的时候去掉var即可
否则全局变量很容易遭到意外更改

#基本数据类型
##数字
不区分整型和浮点
类型转换:
parseInt()
parseFloat()

字符串转换成整型和浮点类型

##字符串
charAt()方法
根据索引获取字符串的字符

substring()方法
获取子字符串

length属性
获取字符串长度



布尔类型

#控制语句
##条件语句
if语句
if(){}else{}
if(){}else if(){}else{}
`==`  字面量判断相等
`!=`  字面量不等
`===` 同python is 字面量和类型都相等, 即相同
`!==` 同python is not 字面量或类型不等, 即不相同

`&&`  同python的and
`||`  同python的or


##for语句
for(var item in array){
  语句体
}
数组, item是索引
如果是字典, item是key

for(var i=0; i<10; i++){
  语句体
}
不支持字典类型

#函数
function 函数名(形参列表){
  函数体
}
setInterval('func()', time)定时器函数
alert()函数
console.log()函数

#列表(数组)
length属性
数组长度

push()方法
尾部添加元素
pop()方法
尾部获取元素
unshift()方法
头部添加元素
shift()方法
头部获取元素
splice(start, deleteCount, val, ...)方法
obj.splice(n,0,val) 指定位置插入元素
obj.splice(n,1,val) 指定位置替换元素
obj.splice(n,1)     指定位置删除元素

slice()方法
切片

obj.reverse( )      反转
obj.join(sep)       将数组元素连接起来以构建一个字符串
obj.concat(val,..)  连接数组
obj.sort( )         对数组元素进行排序

#字典
定义同python

#分号
用来后期上线把js脚本处理成一行, 分号用作分隔符, 节省流量.
分号一定要加上.
