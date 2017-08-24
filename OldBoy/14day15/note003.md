#DOM
直接查找
document.getElementById             根据ID获取一个标签
document.getElementsByName          根据name属性获取标签集合
document.getElementsByClassName     根据class属性获取标签集合
document.getElementsByTagName       根据标签名获取标签集合

tag.innerText
标签文本内容

间接查找
先定位一个, 然后基于已经找到的标签定位其他标签.
parentNode          // 父节点
childNodes          // 所有子节点
firstChild          // 第一个子节点
lastChild           // 最后一个子节点
nextSibling         // 下一个兄弟节点
previousSibling     // 上一个兄弟节点

parentElement           // 父节点标签元素
children                // 所有子标签
firstElementChild       // 第一个子标签元素
lastElementChild        // 最后一个子标签元素
nextElementtSibling     // 下一个兄弟标签元素
previousElementSibling  // 上一个兄弟标签元素

innerText   文本
outerText
innerHTML   HTML内容
innerHTML  
value       值

attributes                // 获取所有标签属性
setAttribute(key,value)   // 设置标签属性
getAttribute(key)         // 获取指定标签属性


className                // 获取所有类名
classList.remove(cls)    // 删除指定类
classList.add(cls)       // 添加类
