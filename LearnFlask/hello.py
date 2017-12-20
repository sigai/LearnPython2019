from flask import Flask, make_response, redirect, abort, render_template, url_for, session, flash
from flask_script import Manager
import flask_bootstrap
from flask_moment import Moment
from datetime import datetime
from flask_wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import Required


class NameForm(Form):
    name = StringField("What is your name?", validators=[Required()])
    submit = SubmitField("Submit")


app = Flask(__name__)
app.config["SECRET_KEY"] = "wesky"
flask_bootstrap.Bootstrap(app)
manager = Manager(app)
moment = Moment(app)


@app.route('/', methods=["GET", "POST"])
def index():
    form = NameForm()
    if form.validate_on_submit():
        old_name = session.get("name")
        if old_name is not None and old_name != form.name.data:
            flash("Looks like you have changed your name!")
        session['name'] = form.name.data
        return redirect(url_for('index'))
    return render_template("index.html", current_time=datetime.utcnow(), form=form, name=session.get('name'))


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
    app.run(port=80, debug=True)