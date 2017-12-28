#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"  # date: 2017/12/27
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class NameForm(FlaskForm):
    name = StringField("What is your name?", validators=[DataRequired()])
    submit = SubmitField("Submit")
