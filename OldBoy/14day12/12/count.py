#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from sqlalchemy import create_engine, func
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

# count = session.query(User).filter(User.name.like("T%")).count()

# group = session.query(func.count(User.name),User.name).group_by(User.name).all()
# print(count, group)

# 删除记录
# delete_data = session.query(User).filter(User.name=='fang').delete()
# print(delete_data)



class Student(Base):
    __tablename__ = 'student'  # 表名
    id = Column(Integer, primary_key=True)      #主键
    name = Column(String(32), nullable=False)       # name字段
    age = Column(Integer, nullable=False)       #password字段
    register_date = Column(Date, nullable=False)       #password字段

    def __repr__(self):
        return "<%s name: %s>"%(self.id, self.name)

Base.metadata.create_all(engine)

# s1 = Student(name='Wang Fei', register_date='2005-07-04', age=23)
# session.add(s1)

# 不需要有外键关联
# res = session.query(User, Student).filter(User.id ==Student.id).all()

# 必须有外键关联
# res = session.query(User).join(Student).all()
# res = session.query(User).join(Student, isouter=False).all()


# print(res)
session.commit()
