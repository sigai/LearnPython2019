#CSS选择器
style属性的值是字典的键值对形式的字符串
background-color: #fff;(rgb颜色)或 red;(颜色)
height: 48px;(像素)

设置标签样式的几种方法:
1. 直接在标签内设置样式
2. 在head标签内的style标签内, 用选择器#ID{}设置, 使用选择器.CLASS{}批量设置样式, 选择器标签类型{}设置所有标签类型. 空格表示标签层级, 逗号表示标签并列, 中括号[]表示选择相应属性的标签

#style注释
`/* */`

#优先级
相同的样式, 前面的设置会被后面的设置覆盖掉而无效.

#第三种方法
link标签的rel属性设置引入文件类型为stylesheet, href属性指定style样式的`.css`文件相对路径, 文件中直接写入css样式. css文件可归档到文件夹下,href指定文件即可

#分号
分隔不同的样式

#边框
border(-left, -right, -top, -bottom): 1px solid red;
solid, dotted, double, dashed
实线, 点虚线, 双实线, 实虚线
上下左右都可以单独设置样式
像素宽度, 样式实线, 颜色红色

height(顶级只设置像素, 内部标签可以设置百分比)
高度

width(可以设置像素和百分比)
宽度

color
字体颜色

font-size(像素值)
字体大小

text-aligh: center;
文本排列(居中)

line-height(像素)
设置垂直居中的范围.

font-weight: bord
字体加粗
bord, border, 100,...900, inherit, initial, lighter, normal, unset


#float
让标签浮动起来, 块级标签可以堆叠.
left, right, inherit

clear: both;

#display
display: block;
display: inline;
display: inline-block; 具有两种标签的特性(既不会占整行也可设置高度宽度边距)

行内标签无法设置高度, 宽度, 边距. 不会生效.
块级标签可以设置.

display: none;
设置标签不显示.

#边距
margin 外边距
padding 内边距
