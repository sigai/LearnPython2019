#!/usr/bin/env python3
import re



data = 'Thu Mar day10 17:01:17 2118::frllzis@eanfltevk.com::4676346077-7-9'

r1 = '\d+-\d+-\d+'
r2 = '.+\d+-\d+-\d+'
r3 = '.+?\d+-\d+-\d+'
r4 = '-(\d+)-'

m1 = re.search(r1, data)
m2 = re.match(r2, data)
m3 = re.search(r3, data)
m4 = re.search(r4, data)
