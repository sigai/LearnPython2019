#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"  # date: 2017/12/27
from datetime import datetime
from flask import render_template, session, redirect, url_for
from flask_login import login_required

from . import main
from .forms import NameForm
from .. import db
from ..models import User
from ..email import send_email


@main.route('/', methods=["GET", "POST"])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            session["known"] = False
            if main.config["FLASK_ADMIN"]:
                send_email(main.config["FLASK_ADMIN"], "New User", "mail/new_user", user=user)
        else:
            session["known"] = True
        print(session)
        session['name'] = form.name.data
        form.name.data = ""
        return redirect(url_for('.index'))
    return render_template("index.html", current_time=datetime.utcnow(), form=form,
                           name=session.get('name'), known = session.get("known", False))


@main.route("/secret")
@login_required
def secret():
    return "Only authenticated users are allowed"


