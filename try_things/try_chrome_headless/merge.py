#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from pathlib import Path

p = Path('.')

urls = set()
for t in p.glob("*.txt"):
    with t.open(mode='r', encoding='utf-8') as f:
        for line in f:
            if line.strip():
                urls.add(line.strip())

with open('all.txt', mode='w', encoding='utf-8') as a:
    a.write('\n'.join(urls))
