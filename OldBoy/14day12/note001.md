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
`grant all on *.* to '<username>'@'%' identified by '<password>';`  设置权限, 密码
`show grants for <username>;`
`flush privileges;` 更改权限后需要更新一下才生效
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

#连接查询
Mysql 连接（left join, right join, inner join ,full join）

我们已经学会了如果在一张表中读取数据，这是相对简单的，但是在真正的应用中经常需要从多个数据表中读取数据。

本章节我们将向大家介绍如何使用 MySQL 的 JOIN 在两个或多个表中查询数据。

你可以在SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询。

JOIN 按照功能大致分为如下三类：

INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。
##inner join
取两个表的相同字段的数据的交集
`select * from <table1> inner join <table2> on <table1.column1>=<table2.column2>`

##left join
取表1-表2的差集
`select * from <table1> left join <table2> on <table1.column1>=<table2.column2>`

##right join
取表2-表1的差集, 与left join相反.
`select * from <table1> right join <table2> on <table1.column1>=<table2.column2>`

##full join
mysql不直接支持full join.
取表1表2字段的的合集, left join和right join的并集
`select * from <table1> left join <table2> on <table1.column1>=<table2.column2> union select * from <table1> right join <table2> on <table1.column1>=<table2.column2>`


增删改查表
权限
#事务
MySQL 事务主要用于处理操作量大，复杂度高的数据。比如说，在人员管理系统中，你删除一个人员，你即需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！

在MySQL中只有使用了Innodb数据库引擎的数据库或表才支持事务
事务处理可以用来维护数据库的完整性，保证成批的SQL语句要么全部执行，要么全部不执行
事务用来管理insert,update,delete语句
一般来说，事务是必须满足4个条件（ACID）： Atomicity（原子性）、Consistency（稳定性）、Isolation（隔离性）、Durability（可靠性）

1. 事务的原子性：一组事务，要么成功；要么撤回。
2. 稳定性 ： 有非法数据（外键约束之类），事务撤回。
3. 隔离性：事务独立运行。一个事务处理后的结果，影响了其他事务，那么其他事务会撤回。事务的100%隔离，需要牺牲速度。
4. 可靠性：软、硬件崩溃后，InnoDB数据表驱动会利用日志文件重构修改。可靠性和高速度不可兼得， innodb_flush_log_at_trx_commit选项 决定什么时候吧事务保存到日志里。

##begin
开始事务
##rollback
回滚事务, 撤销事务
##commit
提交事务

##索引
1. 显示索引
    `show index from <table>;`
2. 创建索引
    `create index <name> on <table.column(<len>)>;`
    `alter <table> add index <name> on (<column>);`
3. 创建表时指定索引
    `create <table> <column> <type> unique <name> (<column>(len));`
4. 删除索引
    `drop index <name> on <table>;`

#python 操作mysql

#ORM sqlachemy学习
orm英文全称object relational mapping,就是对象映射关系程序
优点：
隐藏了数据访问细节，“封闭”的通用数据库交互，ORM的核心。他使得我们的通用数据库交互变得简单易行，并且完全不用考虑该死的SQL语句。快速开发，由此而来。
ORM使我们构造固化数据结构变得简单易行。
缺点：
无可避免的，自动化意味着映射和关联管理，代价是牺牲性能（早期，这是所有不喜欢ORM人的共同点）。现在的各种ORM框架都在尝试使用各种方法来减轻这块（LazyLoad，Cache），效果还是很显著的。

记录操作:
#增加
obj = Users(name="alex0", extra='sb')
session.add(obj)

session.add_all([
    Users(name="alex1", extra='sb'),
    Users(name="alex2", extra='sb'),
])
session.commit()

#查询
##`filter(self, *criterion)`:
apply the given filtering criterion to a copy
of this :class:`.Query`, using SQL expressions.
e.g.::
  session.query(MyClass).filter(MyClass.name == 'some name')
Multiple criteria may be specified as comma separated; the effect
is that they will be joined together using the :func:`.and_`
function::
  session.query(MyClass).\
      filter(MyClass.name == 'some name', MyClass.id > 5)
The criterion is any SQL expression object applicable to the
WHERE clause of a select.   String expressions are coerced
into SQL expression constructs via the :func:`.text` construct.
.. seealso::
  :meth:`.Query.filter_by` - filter on keyword expressions.

##`filter_by(self, **kwargs)`:
r"""apply the given filtering criterion to a copy
of this :class:`.Query`, using keyword expressions.
e.g.::
  session.query(MyClass).filter_by(name = 'some name')
Multiple criteria may be specified as comma separated; the effect
is that they will be joined together using the :func:`.and_`
function::
  session.query(MyClass).\
      filter_by(name = 'some name', id = 5)
The keyword expressions are extracted from the primary
entity of the query, or the last entity that was the
target of a call to :meth:`.Query.join`.
.. seealso::
  :meth:`.Query.filter` - filter on SQL expressions.

##`order_by(self, *criterion)`:
"""apply one or more ORDER BY criterion to the query and return
the newly resulting ``Query``
All existing ORDER BY settings can be suppressed by
passing ``None`` - this will suppress any ORDER BY configured
on mappers as well.
Alternatively, passing False will reset ORDER BY and additionally
re-allow default mapper.order_by to take place.   Note mapper.order_by
is deprecated.
`group_by(self, *criterion)`:
"""apply one or more GROUP BY criterion to the query and return
the newly resulting :class:`.Query`
All existing GROUP BY settings can be suppressed by
passing ``None`` - this will suppress any GROUP BY configured
on mappers as well.
.. versionadded:: 1.1 GROUP BY can be cancelled by passing None,
in the same way as ORDER BY.

ret = session.query(Users).all()
ret = session.query(Users.name, Users.extra).all()
ret = session.query(Users).filter_by(name='alex').all()
ret = session.query(Users).filter_by(name='alex').first()

ret = session.query(Users).filter(text("id<:value and name=:name")).params(value=224, name='fred').order_by(User.id).all()

ret = session.query(Users).from_statement(text("SELECT * FROM users where name=:name")).params(name='ed').all()
#修改
单条数据修改, 直接修改数据对象, 然后提交即可.
多条数据修改
session.query(Users).filter(Users.id > 2).update({"name" : "099"})
session.query(Users).filter(Users.id > 2).update({Users.name: Users.name + "099"}, synchronize_session=False)
session.query(Users).filter(Users.id > 2).update({"num": Users.num + 1}, synchronize_session="evaluate")
session.commit()
#回滚
session.rollback()

#获取所有数据
session.query(User.name, User.password).all()

#多条件查询
session.query(User).filter(User.id>2).filter(User.name='tom').all()

#统计和分组
session.query(User).filter(User.name.like('Ra%')).count()

from sqlalchemy import func
session.query(func.count(User.name), User.name).group_by(User.name).all()

#删除
session.query(Users).filter(Users.id > 2).delete()
session.commit()


#连表查询
session.query(User, Favor).filter(User.id==Favor.id).all()
session.query(Person).join(Favor).all()
session.query(Person).join(Favor, isouter=True).all()


#外键

#多外键

#多对多外键


#补充
数据创建和修改分不同模块

