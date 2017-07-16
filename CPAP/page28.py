import re


a = re.match('\bblow','blow')
b = re.match('\\bblow','blow')
c = re.match(r'\bblow','blow')

print(a,b,c,end="\n")