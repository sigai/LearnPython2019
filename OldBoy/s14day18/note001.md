#js正则
test    判断字符串是否符合规定的正则表达式
exec    匹配获取数据

`/`开头和结尾,代表是正则表达式
test 默认需要^$表示起始和终止 类似re的search
exec 类似Python re的findall

正则分组

\b  边界
正则表达式结尾加g 表示全局(global)匹配 每次匹配返回一个 类似Python生成器
结尾加i    表示忽略大小写(ignore)
结尾加m    表示多行匹配(multiline) 该模式$匹配换行符 ^匹配行的开始

登录验证
自定义事件先执行 默认一般都是自定义事件限制性

- submit
- a

默认事件先执行

- CheckBox

表单验证
前端先检查一遍合法性减轻一部分服务器压力, 后端检查所有验证(也需要合法性验证).
利用标签的自定义属性 

#前端框架选择
BootStrap
jQueryUI
jQuery EasyUI

#WEB框架

#Django

