#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''图像处理库'''
from PIL import Image
from PIL import ImageFilter

baby = Image.open('baby.jpg')
# black_white = baby.convert('L')
# black_white.show()

blur = baby.filter(ImageFilter.BLUR)
detail = baby.filter(ImageFilter.DETAIL)
edges = baby.filter(ImageFilter.FIND_EDGES)
#blur.show()
detail.show()
#edges.show()