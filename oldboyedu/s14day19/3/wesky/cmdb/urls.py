#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from django.conf.urls import url, include

from cmdb import views

urlpatterns = [
    url(r'^index/', views.Index.as_view(), name="iindex"),
    url(r'^login/', views.login),
    url(r'^signup/', views.signup),
    url(r'^home/', views.Home.as_view()),
    # url(r'^detail-(?P<nid>\d+)-(?P<uid>\d+).html', views.Detail.as_view()),
    url(r'^detail-(?P<nid>\d+).html', views.Detail.as_view()),
    url(r'^orm/', views.Orm.as_view()),
    url(r'^$', views.root),
    url(r'^user_info/', views.UserInfo.as_view()),
    url(r'^user_group/', views.UserGroup.as_view()),
    url(r'^userdetail-(?P<nid>\d+)/', views.UserDetail.as_view()),
    url(r'^deluser-(?P<nid>\d+)/', views.DelUser.as_view()),
    url(r'^edituser-(?P<nid>\d+)/', views.EditUser.as_view()),

]
