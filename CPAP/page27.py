import re

a = re.findall(r'\w+(?= van Rossum)','''
    Guido van Rossum
    Tim Peters
    Alex Martelli
    Just van Rossum
    Ray mond Hettinger
    ''')

b = re.findall(r'(?m)^\s+(?!noreply|postmaster)(\w+)','''
    sales@phptr.com
    postmaster@phptr.com
    eng@phptr.com
    noreply@phptr.com
    admin@phptr.com
    ''')

c = ['%s@aw.com' % e.group(1) for e in re.finditer(r'(?m)^\s+(?!noreply|postmaster)(\w+)','''
    sales@phptr.com
    postmaster@phptr.com
    eng@phptr.com
    noreply@phptr.com
    admin@phptr.com
    ''')]

d =re.search(r'(?:(x)|y)(?(1)y|x)','xy')

print(a,b,c,end='\n')
