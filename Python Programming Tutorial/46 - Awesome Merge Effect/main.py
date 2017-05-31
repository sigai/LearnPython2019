#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''图像合并效果'''
from PIL import Image

baby = Image.open('baby.jpg')
girl = Image.open('girl.jpg')
r1, g1 ,b1 = baby.split()
r2, g2, b2 = girl.split()
# new_img = Image.merge('RGB',(b,g,r))

new_img = Image.merge('RGB',(g2,g1,b2))
new_img.show()