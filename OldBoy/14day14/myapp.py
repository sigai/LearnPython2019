#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from flask import Flask

app = Flask(__name__)

@app.route("/index")
def home():
    return "hello world"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)