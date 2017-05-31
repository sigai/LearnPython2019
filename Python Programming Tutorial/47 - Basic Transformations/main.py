#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from PIL import Image

baby = Image.open('baby.jpg')
sqaure_baby = baby.resize((200,200))
flip = baby.transpose(Image.FLIP_LEFT_RIGHT)
spin = baby.transpose(Image.ROTATE_90)
# baby.show()
# sqaure_baby.show()
spin.show()