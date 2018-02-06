#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from django.conf.urls import url

from cms import views

urlpatterns = [
    url(r'^login/', views.Login.as_view()),

]
