#coding=u8

import dis

def test():
    x = 1
    if x < 3:
        return "Yes"
    else:
        return "No"

dis.dis(test)
