#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import argparse

parser = argparse.ArgumentParser()
parser.add_argument("expression", help="s/find_str/replace_str/g", type=str)
parser.add_argument("file", help="The file to operate", type=argparse.FileType('r', encoding='utf-8'))
args = parser.parse_args()

#print(args.expression, args.file)
#print(args.expression.startswith('s'))

def replace_file(a,b,file):
    for line in file:
        line = line.replace(a,b)
        print(line, end='')

if args.expression.startswith('s') and args.expression.endswith('g'):
    a = args.expression.split('/')[1]
    b = args.expression.split('/')[2]
    print(a,b)
    replace_file(a,b,args.file)
