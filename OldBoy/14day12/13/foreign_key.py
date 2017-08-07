#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from sqlalchemy import create_engine, func
from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

engine = create_engine("mysql+pymysql://fangtiansheng:liandan713824@127.0.0.1/oldboydb",
                       encoding='utf-8',
                       # echo=True, # 输出信息
                       )
Base = declarative_base()   # 创建orm基类

class Student(Base):
    __tablename__ = 'student'  # 表名
    id = Column(Integer, primary_key=True)      #主键
    name = Column(String(32), nullable=False)       # name字段
    age = Column(Integer, nullable=False)       #password字段
    register_date = Column(Date, nullable=False)       #password字段

    def __repr__(self):
        return "<%s name: %s>"%(self.id, self.name)

class StudyRecord(Base):
    __tablename__ = 'record'  # 表名
    id = Column(Integer,primary_key= True)      #主键
    day = Column(String(32), nullable=False)       #
    status = Column(String(32), nullable=False)
    stu_id = Column(Integer, ForeignKey('student.id'), nullable=False)       #
    student = relationship('Student', backref="my_record")  # 这个nb，允许你在student表里通过backref字段反向查出所有它在record表里的关联项

    def __repr__(self):
        return "<%s Day: %s Status: %s>"%(self.student.name, self.day, self.status)


Base.metadata.create_all(engine)

# 创建数据
Session_class = sessionmaker(bind=engine)   # 创建会话类, 绑定数据库链接.
session = Session_class()   # 实例化会话类, 同cursor

# s1 = Student(name="Zhao Yun", age=23, register_date="1998-02-15")
# s2 = Student(name="Guan Yu", age=34, register_date="1998-03-16")
# s3 = Student(name="Zhang Fei", age=30, register_date="1999-02-05")
# s4 = Student(name="Huang Zhong", age=76, register_date="1996-12-15")
# s5 = Student(name="Ma Chao", age=56, register_date="1993-07-15")
#
# r1 = StudyRecord(day12=1, status="yes",stu_id=1)
# r2 = StudyRecord(day12=2, status="yes",stu_id=1)
# r3 = StudyRecord(day12=3, status="yes",stu_id=1)
# r4 = StudyRecord(day12=1, status="yes",stu_id=1)
# r5 = StudyRecord(day12=1, status="yes",stu_id=2)
#
# session.add_all([s1,s2,s3,s4,s5,r1,r2,r3,r4,r5])

data = session.query(Student).filter(Student.name=="Zhao Yun").first()
print(data.my_record)

session.commit()
