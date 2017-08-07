#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import views
from sqlalchemy.orm import sessionmaker

Session_class = sessionmaker(bind=views.engine)  # 创建与数据库的会话session class ,注意,这里返回给session的是个class,不是实例
s = Session_class()  # 生成session实例

# b1 = views.Book(name="跟Alex学Python")
# b2 = views.Book(name="跟Alex学把妹")
# b3 = views.Book(name="跟Alex学装逼")
# b4 = views.Book(name="跟Alex学开车")
#
# a1 = views.Author(name="Alex")
# a2 = views.Author(name="Jack")
# a3 = views.Author(name="Rain")
#
# b1.authors = [a1, a2]
# b2.authors = [a1, a2, a3]
#
# s.add_all([b1, b2, b3, b4, a1, a2, a3])

author_obj = s.query(views.Author).filter(views.Author.name=='alex').first()
book_obj = s.query(views.Book).filter(views.Book.id==2).first()
print(author_obj.books[0].authors)
print(book_obj.authors[0].books)
s.commit()
