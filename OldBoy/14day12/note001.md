macbook MySQL的 root密码toor
#MySQL
数据库介绍
数据库(Database)是按照数据结构来组织、存储和管理数据的仓库.
每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。
RDBMS即关系数据库管理系统(Relational Database Management System)

hash()
相同的数据, py2中hash都是一样的, py3中每个程序中是一样的, 不同的程序也会不一样.

数据库的查找是, 二叉树的一种
数据库: 数据库是一些关联表的集合。.
数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
冗余：存储两倍数据，冗余可以使系统速度更快。(表的规范化程度越高，表与表之间的关系就越多；查询时可能经常需要在多个表之间进行连接查询；而进行连接操作会降低查询速度。例如，学生的信息存储在student表中，院系信息存储在department表中。通过student表中的dept_id字段与department表建立关联关系。如果要查询一个学生所在系的名称，必须从student表中查找学生所在院系的编号（dept_id），然后根据这个编号去department查找系的名称。如果经常需要进行这个操作时，连接查询会浪费很多的时间。因此可以在student表中增加一个冗余字段dept_name，该字段用来存储学生所在院系的名称。这样就不用每次都进行连接操作了。)
主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
外键：外键用于关联两个表。
复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。


mysql 数据库安装使用
`mysql -u<username> -p` 登陆MySQL数据库系统
`show databases;` 显示所有数据库
`use <database>;` 打开数据库
`show tables;` 显示数据库中的所有表
`desc <table>;` 查看表结构
`select * from user\G;` 查看表中所有的数据

#mysql管理
`use mysql;`
`grant ALL on *.* to '<username>'@'%' identified by '<password>';`
`show grants for <username>;`
`flush privileges;`
`show columns from <table>;` 同`desc`
`creat database <db> charset 'utf8'` 创建db数据库, 支持utf-8编码
`show create database <db>` 显示数据库创建信息
`drop database <db>;` 删除数据库
`show index from <db>;` 显示数据表的详细索引信息
#mysql 数据类型
三大类: 数值, 日期时间, 字符串

#常用mysql命令
## 创建表 
`create table <tablename> (<column> <type>);`
示例

```
create table student(
    -> id int auto_increment,
    -> name char(32) not null,
    -> age int not null,
    -> register_date date not null,
    -> primary_key (id));
```
##增加记录 
`insert into <table> (<field>,...) values (<value>,...);`
示例

```
insert into student
    -> (name, age, register_date) values
    -> ('房天生', 20, "2017-08-05");
```
## 查找记录 
`select <column>,... from <table> [where 从句][limit n][offset m];`
    where 子句
    where <条件>  精确查询
    where <column> like <match> 匹配查询
    %在字符串中匹配任意字符串.

##更新记录 
`update <table> set <field>=<value>,... [where 从句];`

##删除记录和表 
`delete from <table> [where 从句];` `drop table <table>;`

##排序结果 
`select * from <table> order by <column>;`

##分组结果 
`select *, function(<column>) as <name> from <table> group by <column>;`
function: count, sum
with roolup 统计总和
`select coalesce(<column>, <newname>), function(<column>) as <name> from <table> group by <column> with rollup;`

##修改表属性
`alter table <table> add <column> <type>;` 添加字段
`alter table <table> drop <column>;` 删除字段
`alter table <table> modify <column> <type>;` 修改字段类型(不能修改字段名)
`alter table <table> change <column> <new column> <type>;` 修改字段名和字段类型
更改的时候可以设置是否可以为空, not null和默认值default <value>, 不会对已经存在的数据更改.

创建数据库
#外键
视频7中的问题是引号的问题, 值加引号, 表名, 字段名就不需要加引号, ` 是 mysql 的转义符，只要你不在列名、表名中使用 mysql 的保留字或中文，就不需要转义.

```
create table record(
    id int auto_increment primary key,
    day int not null,
    stu_id int(11) not null,
    status char(32) not null default 'yes', 
    key fk_student_key (stu_id),
    constraint fk_student_key foreign key (stu_id) references student (id));
```


增删改查表
权限
事务 
索引
python 操作mysql 
ORM sqlachemy学习

