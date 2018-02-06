#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from django.utils.safestring import mark_safe


class Page(object):

    def __init__(self, cp, total, NUM_PER_PAGE=10, R=3):
        """
        页码生成器
        :param cp: 当前页码
        :param total: 所有的数据总数
        :param NUM_PER_PAGE:每页显示的数据总数
        :param R: 每页显示的页码数
        """
        self.cp = cp
        self.total = total
        self.n = NUM_PER_PAGE
        self.r = R

    @property
    def start(self):
        return (self.cp - 1) * self.n

    @property
    def end(self):
        return self.cp * self.n

    @property
    def q(self):
        q, r = divmod(self.total, self.n)
        num_pages = q if r else q + 1
        return num_pages

    def pagination(self, base_url):
        pl = '<a class="page" href=\"base_url?p={n}\">{n}</a>'
        pl_a = '<a class="page active" href=\"base_url?p={n}\">{n}</a>'

        if self.q < self.n:
            start_idx = 1
            end_idx = self.total + 1
        else:
            if self.cp < (self.r - self.r // 2):
                start_idx = 1
                end_idx = self.r + 1
            else:
                start_idx = self.cp - self.r // 2
                end_idx = self.cp + self.r // 2 + 1
                if (self.cp + self.r // 2) > self.q:
                    start_idx = self.q + 1 - self.r
                    end_idx = self.q + 1

        pages = "".join([pl.format(n=str(i)) if i != self.cp else pl_a.format(n=str(i)) for i in range(start_idx, end_idx)])

        prev_p = f'<a class="big" href=\"base_url?p={self.cp-1}\">上一页</a>'
        next_p = f'<a class="big" href=\"base_url?p={self.cp+1}\">下一页</a>'
        if self.cp == 1:
            prev_p = f'<a class="big" href=\"javascript:void(0);\">上一页</a>'
        if self.cp == self.q:
            next_p = f'<a class="big" href=\"#\">下一页</a>'

        pages = mark_safe(prev_p + pages + next_p)
        return pages