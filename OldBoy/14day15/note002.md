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

列表
字典
布尔类型

#控制语句
条件语句
for语句

#函数
function 函数名(参数列表){
  函数体
}
setInterval('func()', time)定时器函数
alert()函数
console.log()函数

#数组
length属性
push()方法
pop()方法
unshift()方法
shift()方法
splice()方法
slice()方法
