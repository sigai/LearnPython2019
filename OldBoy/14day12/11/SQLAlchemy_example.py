#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from sqlalchemy import create_engine
from sqlalchemy import Column, Integer ,String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://fangtiansheng:liandan713824@127.0.0.1/oldboydb",
                       encoding='utf-8',
                       # echo=True, # 输出信息
                       )

Base = declarative_base()   # 创建orm基类


class User(Base):
    __tablename__ = 'user'  # 表名
    id = Column(Integer,primary_key= True)      #主键
    name = Column(String(32))       # name字段
    password = Column(String(64))       #password字段

# 创建表
Base.metadata.create_all(engine)

# 创建数据
Session_class = sessionmaker(bind=engine)   # 创建会话类, 绑定数据库链接.
session = Session_class()   # 实例化会话类, 同cursor
user1 = User(name="Tom",password = "hello")     # 实例化一个数据对象
user2 = User(name="John",password = "world")    # 创建另一个数据对象
print(user1.id,user2.name)  # id未生成, 数据尚未创建
session.add(user1)  # 添加数据对象到会话
session.add(user2)
print(user1.id,user2.name)  # id未生成,数据未创建

# 提交事务, 创建数据
session.commit()
