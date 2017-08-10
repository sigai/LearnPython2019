#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from sqlalchemy import Table, MetaData, Column, Integer, String
from sqlalchemy.orm import mapper

metadata = MetaData()

user = Table('user', metadata,
             Column('id', Integer, primary_key=True),
             Column('name', String(50)),
             Column('fullname', String(50)),
             Column('password', String(12))
             )


class User(object):
    def __init__(self, name, fullname, password):
        self.name = name
        self.fullname = fullname
        self.password = password


mapper(User, user)  # the table metadata is created separately with the Table construct, then associated with the User class via the mapper() function
