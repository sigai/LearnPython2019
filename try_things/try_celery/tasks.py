#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# something not right in Win10 https://blog.csdn.net/qq_30242609/article/details/79047660
__author__ = "Sigai"

from celery import Celery

app = Celery('tasks', backend='redis://localhost:6379/0', broker='redis://localhost:6379/0')

@app.task
def add(x, y):
    return x + y

@app.task
def hello():
    return "hello fuck world"