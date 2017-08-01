#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from PIL import Image

baby = Image.open('baby.jpg')
print(baby.size)
print(baby.format)
baby.show()