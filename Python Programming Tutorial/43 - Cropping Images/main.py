#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from PIL import Image

baby = Image.open('baby.jpg')

area = (100,100,300,300)
crop = baby.crop(area)
crop.show()