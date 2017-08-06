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

    def __repr__(self):
        return "<%s name: %s>"%(self.id, self.name)

# 创建数据
Session_class = sessionmaker(bind=engine)   # 创建会话类, 绑定数据库链接.
session = Session_class()   # 实例化会话类, 同cursor

# data = session.query(User).filter_by(name="Tom").all()  # 所有数据对象保存为一个列表
# data = session.query(User).filter_by(name="Tom").first()  # 第一个数据对象

# 用关键字参数查询
# data = session.query(User).filter_by(id=2).all()  # 所有搜索结果数据对象保存为一个列表
# data = session.query(User).filter_by(name='tom').all()  # 所有搜索结果数据对象保存为一个列表

# 用数据对象查询
# data = session.query(User).filter(User.id==2).all()  # 所有搜索结果数据对象保存为一个列表
# data = session.query(User).filter(User.name=='tom').all()  # 所有搜索结果数据对象保存为一个列表

# 多条件查询
data = session.query(User).filter(User.name=='tom', User.id<3).first()  # 所有搜索结果数据对象保存为一个列表

data.name = "Tom Cruse"
data.password = 'FUCK OFF'

print(data)
# 提交事务, 创建数据
session.commit()
