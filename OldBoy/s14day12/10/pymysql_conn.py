#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

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
