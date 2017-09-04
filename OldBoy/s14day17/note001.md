#jQuery
类似python的模块, javascript中叫做类库
DOM/BOM/Javascript的类库
查找元素
  DOM
    直接查找, 10个左右选择器
  jQuery
    选择器
    筛选器
操作元素

<script src="jquery.js"></script>
<script>脚本代码</script>

1. 实例:
jquery对象[0]   就是DOM对象
DOM对象 用$() 转换为jquery对象
$('#i1')  id选择器
$('.c1')  class选择器
$(标签名) 标签选择器
$("selector1, selector2")  组合
$("selector1 selector2")   所有子标签中查找
$("selector1>selector2")大于号     只找子标签
$("selector1+selector2")加号 下一个同级标签
$("selector1~selector2")波浪线   同级标签
${"selector:first"} 筛选器
not, even(奇数), odd(偶数), last, eq(index)(根据索引0开始),
gt(index), lt(index), lang, header(所有的h标签),  animated(动画)

first, last, eq(index)重要

#属性选择器
$("[name]")  具有name属性的标签
$("[name=value]")  具有name值为value的标签
`!=, ^=, $=, *=`
`$("[name1][name2][name3]")`  组合多个属性选择器

#表单选择器
:input
冒号加type属性的值
##表单对象属性选择器
:disabled

#三元运算
条件?真的结果:假的结果
还可以简化为<!条件>

#方法
text() 方法获取对象文本内容, 有参数则设置对象文本内容.
html() 方法
val()  方法
each() 方法 自动遍历jquery对象中的所有DOM对象 循环中this代表当前循环的DOM对象 $(this)转换为jquery对象
addClass() 方法 添加class
removeClass() 方法 删除class
prop() 获取或者设置jquery标签对象属性
attr() 同上
next() 方法 当前jquery对象的下一个对象
nextAll()
nextUntil()
parent()
siblings()  获取当前jquery对象的其他同级标签(不包含当前标签对象).
find()  在所有的后代元素中查找
prev()
prevAll()
prevUntil()
children()
click() 为jquery对象绑定鼠标点击事件

text()
html()
val()

脏数据
