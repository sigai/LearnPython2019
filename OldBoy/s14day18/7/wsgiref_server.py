#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


from wsgiref.simple_server import make_server


def RunServer(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [bytes('<h1>Hello, web!</h1>', encoding='utf-8'), ]


if __name__ == '__main__':
    httpd = make_server('', 8000, RunServer)
    print("Serving HTTP on port 8000...")
    httpd.serve_forever()
