#css重用
利用优先级特性, 共同的样式写在一起(一个class选择器c中), 不同的部分再单独写(单独的class选择器c1), 然后一起以多class形式(class="c c1")应用到标签

```html
<style>
  .c{
    共有样式
  }
  .c1{
    独有
  }
  .c2{
    独有
  }
</style>
<div class="c c1"></div>
<div class="c c2"></div>
```

#放大页面变形(自适应)

左右滚动条
宽度(百分比, 像素)

外层设置固定像素
内层设置百分比相对大小

#a标签内的img标签默认有边框
需要设置样式把boder设为0
默认有1px的边框

#position
position:fixed; top, bottom, left, right
固定标签到浏览器窗口的相对位置

position:absolute;
position:relative;
组合使用, 相对上级标签定位
外部标签relative内部标签absolute可实现 内部标签相对外部标签的定位

#z-index
值越大, 越靠前

#标签自动居中
margin:0 auto

#文本居中
line-height: 48px;
text-align:center;

#opcity
透明度0-1透明到不透明(0-100%的意思)

#overflow
当标签内元素大于标签框架时的处理.
visible全部显示
hidden多余部分隐藏
scroll超出则出现滚动条
默认为visible, auto自动超出则出现滚动条
只要使用hidden和auto

#伪类
鼠标光标悬浮时激活样式
在选择器后面加:hover并设置样式

#背景
background-image:url('');
background-repeat: no-repeat;(repeat-x, repeat-y)
background-position: 10px 20px;
background-position-x: 10px;
background-position-y: 10px;
减少网站的流量压力
图片资源的复用
可以直接在background属性中设置即可, 会自动生成相应的样式.
