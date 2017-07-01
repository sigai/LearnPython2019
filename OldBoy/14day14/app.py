#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # print(111)
        # u = self.get_argument('user')
        # e = self.get_argument('email')
        # p = self.get_argument('pwd')
        # if u =="vipfts" and p == "1234" and e == "vipfts@qq.com":
        #     self.write("登陆成功")
        # else:
        #     self.write("Sorry")
        g = self.get_arguments("gender")
        h = self.get_arguments("hobits")
        s = self.get_arguments("skills")
        self.write(str(len(s)))
    def post(self, *args, **kwargs):
        u = self.get_argument('user')
        e = self.get_argument('email')
        p = self.get_argument('pwd')
        print(u, e, p)
        self.write("POST")

application = tornado.web.Application([
    (r"/index", MainHandler),
])

if __name__ == "__main__":
    application.listen(8000)
    tornado.ioloop.IOLoop.instance().start()