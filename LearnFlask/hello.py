from flask import Flask, make_response, redirect, abort, render_template
from flask_script import Manager
import flask_bootstrap
from flask_moment import Moment
from datetime import datetime

app = Flask(__name__)
flask_bootstrap.Bootstrap(app)
manager = Manager(app)
moment = Moment(app)

@app.route('/')
def index():
    return render_template("index.html", current_time=datetime.utcnow())


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