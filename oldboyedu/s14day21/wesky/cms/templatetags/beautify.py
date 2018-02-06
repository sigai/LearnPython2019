#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.simple_tag
def more(article):
    return article[:5]


@register.filter
def duplicate(arg, n):
    arg = arg
    return arg*n
