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

my_user = session.query(User).filter_by(id=1).first()
my_user.name = 'Xi Jinping'

fake_user = User(name='Rain', password='12345')

session.add(fake_user)

print(session.query(User).filter(User.name.in_(['Jack',"Rain"])).all())

session.rollback()

print(session.query(User).filter(User.name.in_(['Jack','Rain'])).all())

session.commit()
