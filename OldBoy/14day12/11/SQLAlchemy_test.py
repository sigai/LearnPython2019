#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from sqlalchemy import create_engine
from sqlalchemy import Column, Integer ,String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine("mysql+pymysql://vipfts:liandan713824@192.168.44.143/oldboydb",encoding = 'utf-8',echo = True)

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer,primary_key= True)
    name = Column(String(32))
    password = Column(String(64))

Base.metadata.create_all(engine)

Session_class = sessionmaker(bind=engine)
session = Session_class()
user1 = User(name="Tom",password = "hello")
user2 = User(name="John",password = "world")
print(user1.id,user2.name)
session.add(user1)
session.add(user2)
print(user1.id,user2.name)

session.commit()
