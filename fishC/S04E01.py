#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from itertools import combinations
import pandas as pd

def area(points):
    (ax, ay), (bx, by) = points
    return abs(bx - ax) * min(ay, by)

def max_area(list_of_number):
    coordinates = ((x, y) for x, y in enumerate(list_of_number))
    buckets = combinations(coordinates, 2)
    result_of_max_area = pd.Series(area(i) for i in buckets).max()
    return result_of_max_area

li = [1,8,6,2,5,4,8,3,7]*10000

print(max_area(li))