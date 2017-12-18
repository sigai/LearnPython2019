from flask import Flask, make_response, redirect, abort, render_template
from flask.ext.script import Manager


app = Flask(__name__)
manager = Manager(app)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user/<name>')
def user(name):
    u = "fangtiansheng"
    if name != u:
        abort(404)
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
