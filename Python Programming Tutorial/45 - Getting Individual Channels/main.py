#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from PIL import Image

baby = Image.open('baby.jpg')
r, g, b = baby.split()
r.show()
g.show()
b.show()