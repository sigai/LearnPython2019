#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

'''统计'''

import  heapq

grade = [123,45,89,358,4798,48,798,14,496,56,6,85,37,49,196]

print(heapq.nlargest(3,grade))

children = [
	{'tom' : 32, 'grade' : 85},
	{'jimmy' : 31, 'grade' : 93},
	{'tommy' : 18, 'grade' : 83},
	{'sky' : 57, 'grade' : 62}
]
print(heapq.nsmallest(2,children,key=lambda children : children['grade']))