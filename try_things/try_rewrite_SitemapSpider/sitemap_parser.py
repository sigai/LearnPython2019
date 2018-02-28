#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import requests

from scrapy.utils.sitemap import Sitemap
from scrapy.http import XmlResponse


url = 'https://answers.microsoft.com/map/thread?day=1'

body = requests.get(url)

s = Sitemap(body.content)

for d in s:
    print(d)