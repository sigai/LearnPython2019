#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import views
from sqlalchemy.orm import sessionmaker

session_class = sessionmaker(bind=views.engine)
session = session_class()

addr1 = views.Address(street='Tiananmen', city='Xuanwu')
addr2 = views.Address(street='Liyuan', city='Tongzhou')
addr3 = views.Address(street='yanjiao', city='Langfang')

session.add_all([addr1, addr2, addr3])

c1 = views.Customer(name='Tom',billing_address=addr1, shipping_address=addr2)
c2 = views.Customer(name='Jon',billing_address=addr3, shipping_address=addr3)

session.add_all([c1, c2])

session.commit()

