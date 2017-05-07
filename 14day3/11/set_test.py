#!/usr/bin/python
# -*- coding: UTF-8 -*-

list_1 = [1,4,5,7,3,6,7,9,3,6]
list_1_set = set(list_1)

list_2_set = set([2,6,0,55,66,22,6,8,4])
list_3_set = set([1,3,7])
print(list_1_set.intersection(list_2_set))
print(list_1_set.union(list_2_set))
print(list_1_set.difference(list_2_set))
print(list_1_set.issubset(list_2_set))
print(list_1_set.issuperset(list_2_set))
print(list_1_set.issuperset(list_3_set))

print(list_1_set.symmetric_difference(list_2_set))

list_1_set.add(999)
list_1_set.update([99,13,45])
print(list_1_set)
print(list_1_set.pop())