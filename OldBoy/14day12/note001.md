macbook 和 windows MySQL的 root密码toor


#MySQL
数据库基础知识
数据库(Database)是按照数据结构来组织、存储和管理数据的仓库.
每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。
RDBMS即关系数据库管理系统(Relational Database Management System)


数据库: 数据库是一些关联表的集合。.
数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
冗余：存储两倍数据，冗余可以使系统速度更快。(表的规范化程度越高，表与表之间的关系就越多；查询时可能经常需要在多个表之间进行连接查询；而进行连接操作会降低查询速度。例如，学生的信息存储在student表中，院系信息存储在department表中。通过student表中的dept_id字段与department表建立关联关系。如果要查询一个学生所在系的名称，必须从student表中查找学生所在院系的编号（dept_id），然后根据这个编号去department查找系的名称。如果经常需要进行这个操作时，连接查询会浪费很多的时间。因此可以在student表中增加一个冗余字段dept_name，该字段用来存储学生所在院系的名称。这样就不用每次都进行连接操作了。)
主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
外键：外键用于关联两个表。
复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。数据库的查找是B+树, 二叉树的一种, hash() 相同的数据, py2中hash都是一样的, py3中每个程序中是一样的, 不同的程序也会不一样.
参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。


#mysql数据库安装使用
官网下载安装
#密码重置
添加windows下mysql服务
以管理员身份打开cmd,执行
mysqld --install
net stop mysql
#忘记密码找回
my.ini 的mysqld下添加
skip-grant-tables
#启动mysql服务
net start mysqld
cd C:\Program Files\MySQL\MySQL Server 5.7\bin
mysql
use mysql
设置新密码
update mysql.user
set authentication_string=password('toor')
  where user='root' and Host =
  'localhost';
flush privileges;
5.7以前版本可用`UPDATE user SET Password=PASSWORD('newpassword') where USER='root';`更新密码

使用命令
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
`creat database <db> charset 'utf8';` 创建db数据库, 支持utf-8编码
`show create database <db>;` 显示数据库创建信息
`drop database <db>;` 删除数据库
`show index from <table>;` 显示数据表的详细索引信息

#mysql 数据类型
三大类: 数值, 日期时间, 字符串
数值: TINYINT(1字节), SMALLINT(2字节), MEDIUMINT(3字节), INT或INTEGER(4字节,最常用), BIGINT(8字节), FLOAT(4字节), DOUBLE(8字节), DECIMAL
日期和时间类型: DATETIME(8字节)、DATE、TIMESTAMP、TIME和YEAR。
字符串:CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET, 常用的TEXT, CHAR, VARCHAR.

#常用mysql命令
## 创建表
`create table <tablename> (<column> <type> <not null> <auto_increment> primary key (column));`
示例

```sql
create table student(
    -> id int auto_increment,
    -> name char(32) not null,
    -> age int not null,
    -> register_date date not null,
    -> primary key (id));
```
##增加记录
`insert into <table> (<field>,...) values (<value>,...);`
示例

```sql
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
`select coalesce(<column>, <newname>) as <column>, function(<column>) as <name> from <table> group by <column> with rollup;` 加个as 就完美了

##修改表属性
`alter table <table> add <column> <type> not null;` 添加字段, not null 会自动为已存在的数据添加默认设置
`alter table <table> drop <column>;` 删除字段
`alter table <table> modify <column> <type>;` 修改字段类型(不能修改字段名)
`alter table <table> change <column> <new column> <type>;` 修改字段名和字段类型
更改的时候可以设置是否可以为空, not null和默认值default <value>, 不会对已经存在的数据更改.

#外键
视频7中的问题是引号的问题, 值加引号, 表名, 字段名就不需要加引号, 分隔符 \` 是 mysql 的转义符，只要你不在列名、表名中使用 mysql 的保留字或中文，就不需要转义.

```SQL
create table record(
    id int auto_increment primary key,
    day int not null,
    stu_id int(11) not null,
    status char(32) not null default 'yes',
    key fk_student_key (stu_id),
    constraint fk_student_key foreign key (stu_id) references student (id));
```
视频里ALex被武佩琪坑了, 创建record表的时候没有自增id.
参照完整性, 如果关联的表里没有关联字段的值, 被关联的表里无法添加成功的. 已经被关联的表中的数据无法被删除.

#NULL值处理
mysql三大运算符:
is null:当列的值是NULL, 返回TRUE.
is not null: 当列的值不为NULL, 返回TRUE.
<=>:比较操作符, 当比较的两个值为NULL时, 返回TRUE.
NULL与其他任何值的比较永远返回false, 所以要使用IS NULL 或 IS NOT NULL处理NULL值.

#连接查询
多表查询

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
等效于
`select table1.*, table2.* from table1, table2 where <table1.column1>=<table2.column2>`
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


#事务
MySQL 事务主要用于处理操作量大，复杂度高的数据。比如说，在人员管理系统中，你删除一个人员，你即需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！
MySQL5.5 InnoDB变为默认引擘
在MySQL中只有使用了Innodb数据库引擎的数据库或表才支持事务
事务处理可以用来维护数据库的完整性，保证成批的SQL语句要么全部执行，要么全部不执行
事务用来管理insert,update,delete语句
一般来说，事务是必须满足4个条件（ACID）： Atomicity（原子性）、Consistency（稳定性）、Isolation（隔离性）、Durability（可靠性）

1. 事务的原子性：一组事务，要么成功；要么撤回。
2. 稳定性 ： 有非法数据（外键约束之类），事务撤回。
3. 隔离性：事务独立运行。一个事务处理后的结果，影响了其他事务，那么其他事务会撤回。事务的100%隔离，需要牺牲速度。
4. 可靠性：软、硬件崩溃后，InnoDB数据表驱动会利用日志文件重构修改。可靠性和高速度不可兼得， innodb_flush_log_at_trx_commit选项 决定什么时候吧事务保存到日志里。

`begin`
开始事务
`rollback`
回滚事务, 撤销事务
`commit`
提交事务

##索引
单列索引和组合索引(联合唯一), 创建索引时, 应该确保会被使用. 使用索引会导致表更新的操作性能降低.
1. 显示索引
    `show index from <table>;`
2. 创建索引
    `create index <name> on <table.column(<len>)>;`
    `alter <table> add index <name> on (<column>);`
3. 创建表时指定索引
    `create <table> <column> <type> unique <name> (<column>(len));`
4. 删除索引
    `drop index <name> on <table>;`

更多mysql
http://www.cnblogs.com/wupeiqi/articles/5713323.html
练习
http://www.cnblogs.com/wupeiqi/articles/5729934.html

#python 操作mysql
```python
import pymysql

conn = pymysql.connect(
    host='127.0.0.1',
    port = 3306,
    user='root',
    password='toor',
    database='oldboydb',
    charset='utf8', # 支持中文

)

cursor = conn.cursor()

effect_row = cursor.execute('select * from student')
print(cursor.fetchone())
print(cursor.fetchmany(4))
print(cursor.fetchall())

data=[
    (r"习近平", 45, "2017-09-08"),
    (r"彭丽媛", 40, "2018-08-07"),
    (r"毛泽东", 99, "1980-08-03"),
    (r"周恩来", 108, "1879-09-08"),
    (r"朱德", 89, "1967-09-07"),
]
# 事务操作
# cursor.executemany("insert into student(name, age, register_date) values (%s,%s,%s)", data)
# conn.commit()

cursor.close()
conn.close()

# 获取最新自增ID
# new_id =cursor.lastrowid
# print(new_id)
```

#ORM sqlachemy学习
orm英文全称object relational mapping,就是对象映射关系程序
优点：
隐藏了数据访问细节，“封闭”的通用数据库交互，ORM的核心。他使得我们的通用数据库交互变得简单易行，并且完全不用考虑该死的SQL语句。快速开发，由此而来。
ORM使我们构造固化数据结构变得简单易行。
缺点：
无可避免的，自动化意味着映射和关联管理，代价是牺牲性能（早期，这是所有不喜欢ORM人的共同点）。现在的各种ORM框架都在尝试使用各种方法来减轻这块（LazyLoad，Cache），效果还是很显著的。
创建连接支持中文:

```Python
engine = create_engine("mysql+pymysql://fangtiansheng:liandan713824@127.0.0.1/oldboydb?charset=utf8",
                       encoding='utf-8', # 没什么用
                       echo=True, # 输出信息
                       )
```
记录操作:
#增加

```python
obj = Users(name="alex0", extra='sb')   # 新建记录对象
session.add(obj)    # 新建操作添加到会话中

session.add_all([
    Users(name="alex1", extra='sb'),
    Users(name="alex2", extra='sb'),
])      # 添加多个记录数据对象
session.commit()    # 提交
```

#查询

##`filter(self, *criterion)`:
SQL表达式过滤
用指定的过滤条件criterion(SQL表达式), 过滤Query, 并返回一个Query类的拷贝.
例如:
  session.query(MyClass).filter(MyClass.name == 'some name')

多条件查询的参数用逗号分隔, 效果跟用.and_方法获得的交集结果相同.
  session.query(MyClass).\
      filter(MyClass.name == 'some name', MyClass.id > 5)

criterion参数是select语句中where字句可用的任意SQL表达式对象.
字符串表达式可以用text构造方法将其强制转换成SQL表达式.
`.Query.filter_by`关键字表达式过滤

##`filter_by(self, **kwargs)`:
用关键字表达式过滤`.Query`类的拷贝.
例如:
  session.query(MyClass).filter_by(name = 'some name')

多条件查询参数用逗号分隔, 跟用`.and_`方法join之后的效果一样.
例如
  session.query(MyClass).\
      filter_by(name = 'some name', id = 5)

关键字表达式是查询的主要实体中提取的, 或者是`.Query.join`方法的最后实体.
`.Query.filter`用SQL表达式过滤


##`order_by(self, *criterion)`:
按一个或多个ORDER BY条件参数排序查询并返回新的`Query`类结果.

所有的ORDER BY设置都会无效, 如果有一个条件是`None`, 在mpper函数中也一样.

另外, 如果条件参数中有`False`会重置ORDER BY, 并且使用mapper.order_by的默认设置. 注意: `mapper.order_by`不推荐使用.

##`group_by(self, *criterion)`:
按一个或多个ORDER BY条件参数排序查询并返回新的`Query`类结果.

所有的GROUP BY设置都会无效, 如果有一个条件是`None`, 在mpper函数中也一样.

1.1 版本开始添加, 跟ORDER BY一样, 传递`None`可以取消分组设置.

例子:
```python
ret = session.query(Users).all()
ret = session.query(Users.name, Users.extra).all()
ret = session.query(Users).filter_by(name='alex').all()
ret = session.query(Users).filter_by(name='alex').first()

ret = session.query(Users).filter(text("id<:value and name=:name")).params(value=224, name='fred').order_by(User.id).all()

ret = session.query(Users).from_statement(text("SELECT * FROM users where name=:name")).params(name='ed').all()
```

#修改
单条数据修改, 直接修改数据对象, 然后提交即可.
多条数据修改
`sqlalchemy.orm.query.update`

```python
def update(self, values, synchronize_session='evaluate', update_args=None):
    执行批量更新查询.
    更新数据库中此查询所匹配的行.

        sess.query(User).filter(User.age == 25).\
            update({User.age: User.age - 10}, synchronize_session=False)

        sess.query(User).filter(User.age == 25).\
            update({"age": User.age - 10}, synchronize_session='evaluate')

       # 警告: `.Query.update`方法是一个批量操作, 为了性能, ORM会自动将其作为一个单元操作, 请sqlalchemy.orm模块下的query.update, 获得更多信息.
```

示例:
```python
session.query(Users).filter(Users.id > 2).update({"name" : "099"})
session.query(Users).filter(Users.id > 2).update({Users.name: Users.name + "099"}, synchronize_session=False)
session.query(Users).filter(Users.id > 2).update({"num": Users.num + 1}, synchronize_session="evaluate")
session.commit()
```

#回滚
session.rollback()
```python
`rollback(self)`:
Rollback the current transaction in progress.

        If no transaction is in progress, this method is a pass-through.

        This method rolls back the current transaction or nested transaction
        regardless of subtransactions being in effect.  All subtransactions up
        to the first real transaction are closed.  Subtransactions occur when
        :meth:`.begin` is called multiple times.

        .. seealso::

            :ref:`session_rollback`
```

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
不需要关联关系.
session.query(User, Favor).filter(User.id==Favor.id).all()
需要表之间已经存在关联关系.
session.query(Person).join(Favor).all()
session.query(Person).join(Favor, isouter=True).all()


#外键, 多外键
新建数据表类, 可以映射数据库中已经存在的表.
`student = relationship('Student', backref="my_record")`
这个nb，允许你在student表里通过backref字段反向查出所有它在record表里的关联项
这个在sqlalchemy.orm.relationships 里的第120行到820注释里. 笑哭了, 太多了吧.

```
Provide a relationship between two mapped classes.
This corresponds to a parent-child or associative table relationship.
        The constructed class is an instance of
        :class:`.RelationshipProperty`.

        A typical :func:`.relationship`, used in a classical mapping::

           mapper(Parent, properties={
             'children': relationship(Child)
           })

        Some arguments accepted by :func:`.relationship` optionally accept a
        callable function, which when called produces the desired value.
        The callable is invoked by the parent :class:`.Mapper` at "mapper
        initialization" time, which happens only when mappers are first used,
        and is assumed to be after all mappings have been constructed.  This
        can be used to resolve order-of-declaration and other dependency
        issues, such as if ``Child`` is declared below ``Parent`` in the same
        file::

            mapper(Parent, properties={
                "children":relationship(lambda: Child,
                                    order_by=lambda: Child.id)
            })

        When using the :ref:`declarative_toplevel` extension, the Declarative
        initializer allows string arguments to be passed to
        :func:`.relationship`.  These string arguments are converted into
        callables that evaluate the string as Python code, using the
        Declarative class-registry as a namespace.  This allows the lookup of
        related classes to be automatic via their string name, and removes the
        need to import related classes at all into the local module space::

            from sqlalchemy.ext.declarative import declarative_base

            Base = declarative_base()

            class Parent(Base):
                __tablename__ = 'parent'
                id = Column(Integer, primary_key=True)
                children = relationship("Child", order_by="Child.id")

        .. seealso::

          :ref:`relationship_config_toplevel` - Full introductory and
          reference documentation for :func:`.relationship`.

          :ref:`orm_tutorial_relationship` - ORM tutorial introduction.
```
http://docs.sqlalchemy.org/en/latest/orm/relationship_api.html

`class ForeignKey(DialectKWArgs, SchemaItem)`:
Defines a dependency between two columns.

    ``ForeignKey`` is specified as an argument to a :class:`.Column` object,
    e.g.::

        t = Table("remote_table", metadata,
            Column("remote_id", ForeignKey("main_table.id"))
        )

    Note that ``ForeignKey`` is only a marker object that defines
    a dependency between two columns.   The actual constraint
    is in all cases represented by the :class:`.ForeignKeyConstraint`
    object.   This object will be generated automatically when
    a ``ForeignKey`` is associated with a :class:`.Column` which
    in turn is associated with a :class:`.Table`.   Conversely,
    when :class:`.ForeignKeyConstraint` is applied to a :class:`.Table`,
    ``ForeignKey`` markers are automatically generated to be
    present on each associated :class:`.Column`, which are also
    associated with the constraint object.

    Note that you cannot define a "composite" foreign key constraint,
    that is a constraint between a grouping of multiple parent/child
    columns, using ``ForeignKey`` objects.   To define this grouping,
    the :class:`.ForeignKeyConstraint` object must be used, and applied
    to the :class:`.Table`.   The associated ``ForeignKey`` objects
    are created automatically.

    The ``ForeignKey`` objects associated with an individual
    :class:`.Column` object are available in the `foreign_keys` collection
    of that column.

    Further examples of foreign key configuration are in
    :ref:`metadata_foreignkeys`.

#多对多外键


#补充
项目中, 数据创建和修改应该分不同的模块.
