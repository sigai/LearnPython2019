#序列化
json 和 pickle

用于序列化的两个模块

json，用于字符串 和 python数据类型间进行转换
pickle，用于python特有的类型 和 python的数据类型间进行转换
Json模块提供了四个功能：dumps、dump、loads、load

pickle模块提供了四个功能：dumps、dump、loads、load

json只能dumps一次，load一次。

#软件目录结构规范
Foo/
|-- bin/ or scripts/
|   |-- foo
|
|-- foo/
|   |-- tests/
|   |   |-- __init__.py
|   |   |-- test_main.py
|   |
|   |-- __init__.py
|   |-- main.py
|
|-- docs/
|   |-- conf.py
|   |-- abc.rst
|
|-- setup.py
|-- requirements.txt
|-- README
简要解释一下:

bin/: 存放项目的一些可执行文件，当然你可以起名scripts/之类的也行。
foo/: 存放项目的所有源代码。(1) 源代码中的所有模块、包都应该放在此目录。不要置于顶层目录。(2) 其子目录tests/存放单元测试代码； (3) 程序的入口最好命名为main.py。
docs/: 存放一些文档。
setup.py: 安装、部署、打包的脚本。
requirements.txt: 存放软件依赖的外部Python包列表。
README: 项目说明文件。
除此之外，有一些方案给出了更加多的内容。比如LICENSE.txt,ChangeLog.txt文件等，我没有列在这里，因为这些东西主要是项目开源的时候需要用到。如果你想写一个开源软件，目录该如何组织，可以参考这篇文章。
