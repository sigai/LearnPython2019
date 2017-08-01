#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

haproxy = {
    'default':{
        '':'',

    }
}
key = 'default'
with open("data", "r", encoding="utf-8") as f:
    for line in f:
        if not line.startswith(' '):
            key = line.partition(' ')[2]
            haproxy[key] = {}
        else:
            fields = line.split()
            haproxy[key][fields[0]] = (fields[1], fields[2])
            haproxy[key][fields[3]] = fields[4]
            haproxy[key][fields[5]] = fields[6]

print(haproxy)
