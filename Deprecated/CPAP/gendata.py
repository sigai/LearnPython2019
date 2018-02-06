from random import randrange, choice
from string import ascii_lowercase as lc
from sys import maxsize
from time import ctime

tlds = ('com','edu','net','org','gov')

for i in range(randrange(5,11)):
    dtint = randrange(int(maxsize/(10**9)))
    dtstr = ctime(dtint)
    llen = randrange(4,8)
    login = ''.join(choice(lc) for _ in range(llen))
    dlen = randrange(llen, 13)
    dom = ''.join(choice(lc) for _ in range(dlen))
    with open('redata.txt','a',encoding='utf-8') as f:
        print('%s::%s@%s.%s::%d-%d-%d'%(dtstr, login, dom, choice(tlds), dtint,llen, dlen), file=f)
