#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from PIL import Image

baby = Image.open('baby.jpg')
girl = Image.open('girl.jpg')

area = (0,0,490,490)
girl.paste(baby,area)
girl.show()