#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from sqlalchemy import create_engine, Integer, ForeignKey, String, Column
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

engine = create_engine("mysql+pymysql://fangtiansheng:liandan713824@127.0.0.1/oldboydb",
                       encoding='utf-8',
                       # echo=True, # 输出信息
                       )
Base = declarative_base()


class Customer(Base):
    __tablename__ = 'customer'
    id = Column(Integer, primary_key=True)
    name = Column(String(64))

    billing_address_id = Column(Integer, ForeignKey("address.id"))
    shipping_address_id = Column(Integer, ForeignKey("address.id"))

    billing_address = relationship("Address", foreign_keys=[billing_address_id])
    shipping_address = relationship("Address", foreign_keys=[shipping_address_id])


class Address(Base):
    __tablename__ = 'address'
    id = Column(Integer, primary_key=True)
    street = Column(String(64))
    city = Column(String(64))
    state = Column(String(64))

# Base.metadata.create_all(engine) # 创建表
