from flask import Flask, make_response, redirect, abort, render_template, url_for, session, flash
from flask_script import Manager, Shell
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from datetime import datetime
from flask_wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
import os


class NameForm(Form):
    name = StringField("What is your name?", validators=[DataRequired()])
    submit = SubmitField("Submit")


basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config["SECRET_KEY"] = "wesky"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, 'data.sqlite')
app.config["SQLALCHEMY_COMMIT_ON_TEARDWN"] = True
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
db = SQLAlchemy(app)
Bootstrap(app)
manager = Manager(app)
moment = Moment(app)
migrate = Migrate(app, db)
manager.add_command("db", MigrateCommand)


def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)


manager.add_command("shell", Shell(make_context=make_shell_context))


class Role(db.Model):
    __tablename__ = "roles"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    users = db.relationship("User", backref="role", lazy="dynamic")

    def __repr__(self):
        return "<Role %r>" % self.name


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)

    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"))

    def __repr__(self):
        return "<User %r>" % self.username


@app.route('/', methods=["GET", "POST"])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            session["known"] = False
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


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    manager.run()
