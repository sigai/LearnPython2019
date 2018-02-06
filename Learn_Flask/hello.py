from flask import Flask, make_response, redirect, abort, render_template, url_for, session, flash
from flask_script import Manager, Shell
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_mail import Mail, Message
import os
from threading import Thread


class NameForm(FlaskForm):
    name = StringField("What is your name?", validators=[DataRequired()])
    submit = SubmitField("Submit")


basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config["SECRET_KEY"] = "wesky"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, 'data.sqlite')
app.config["SQLALCHEMY_COMMIT_ON_TEARDWN"] = True
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
app.config["MAIL_SERVER"] = "smtp.163.com"
app.config["MAIL_PORT"] = 25
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.environ.get("Mail_USERNAME")
app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")
app.config["FLASKY_MAIL_SUBJECT_PREFIX"] = "[Flasky]"
app.config["FLASKY_MAIL_SENDER"] = "Flasky Admin <vipfts@163.com>"
app.config["FLASK_ADMIN"] = os.environ.get("FLASKY_ADMIN")

Bootstrap(app)
mail = Mail(app)
manager = Manager(app)
moment = Moment(app)
migrate = Migrate(app, db)
manager.add_command("db", MigrateCommand)


def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)


manager.add_command("shell", Shell(make_context=make_shell_context))


def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def send_email(to, subject, template, **kwargs):
    msg = Message(app.config["FLASKY_MAIL_SUBJECT_PREFIX"] + subject,
                  sender=app.config["FLASKY_MAIL_SENDER"], recipients=[to,])
    msg.body = render_template(template + ".txt", **kwargs)
    msg.html = render_template(template + ".html", **kwargs)
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()
    return thr


@app.route('/', methods=["GET", "POST"])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            session["known"] = False
            if app.config["FLASK_ADMIN"]:
                send_email(app.config["FLASK_ADMIN"], "New User", "mail/new_user", user=user)
        else:
            session["known"] = True
        print(session)
        session['name'] = form.name.data
        form.name.data = ""
        return redirect(url_for('index'))
    return render_template("index.html", current_time=datetime.utcnow(), form=form,
                           name=session.get('name'), known = session.get("known", False))


@app.route('/user/<name>')
def user(name):
    u = "fangtiansheng"
    # if name != u:
    #     abort(404)
    return render_template("user.html", name=name)


@app.route('/set_cookie')
def set_cookie():
    response = make_response("<h2>set_cookie</h2>")
    response.set_cookie('user', 'fangtiansheng')
    return response


@app.route('/baidu')
def baidu():
    return redirect("https://www.baidu.com")




if __name__ == '__main__':
    manager.run()
