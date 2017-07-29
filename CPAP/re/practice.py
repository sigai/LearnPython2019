#!/usr/bin/env python3

import re

p1 = re.findall(r'([bh][aiu]t)','bat, bit, but, hat, hit, hut')
print(p1)

p2 = re.match(r'(?P<firstname>\w+) (?P<lastname>\w+)','Tom Hanks')
print(p2.groupdict())

p3 = re.match(r'(?P<firstname>\w+), (?P<lastname>\w)', 'Tom, H')
print(p3.groupdict())

p4 = re.match(r'^[A-Za-z_]\w+','__main')
print(p4.group())

p5 = re.match(r'(\d+) (\w+\s)+','3120 De la Cruz Boulevard')
print(p5.group())

p6 = re.findall(r'(?:\w+://)(w{3}\.\w+\.\w+)','http://www.yahoo.com')
print(p6)

p7 = re.match(r'\d+','123123')
print(p7.group())

p8 = re.match(r'\d+L', '12313123172837182638716231L')
print(p8.group())

p9 = re.match(r'\d+\.\d+','1546456.345234234')
print(p9.group())

#复数不会拉鸡倒 p10

p11 = re.findall(r'\w+@[\w+\.]+\w+', 'vipfts@qq.com vipfts@vip.qq.com')
print(p11)

p12 = re.match(r'[\w+\.]+\w+','www.yahoo.com')
print(p12.group())

p13 = re.search(r'<type \'(\w+)\'>', "<type 'int'>")
print(p13.group(1))

p14 = re.findall(r'(1[012]+?)','day10, 11, 12, 13')
print(p14)

p15 = re.match(r'(\d{4}-\d{6}-\d{5})|(\d{4}-\d{4}-\d{4}-\d{4})','1231-111111-11111')
print(p15.group())











