# encoding = "utf-8"
import re


# a=re.match(r'\((?P<areacode>\d{3})\) (?P<prefix>\d{3})-(?P<number>\d{4}) (?P=areacode)-(?P=prefix)-(?P=number) 1(?P=areacode)(?P=prefix)(?P=number)', '(800) 555-1212 800-555-1212 18005551212')

a = re.match(r'''(?x)
    # 匹配 原格式并保存字段 空格用字符集标记不然会忽视掉
    \((?P<areacode>\d{3})\)[ ](?P<prefix>\d{3})-(?P<number>\d{4})
    # 空格
    [ ]
    # 匹配 横杠格式
    (?P=areacode)-(?P=prefix)-(?P=number)
    #空格
    [ ]
    #匹配 连体格式
    1(?P=areacode)(?P=prefix)(?P=number)
''', '(800) 555-1212 800-555-1212 18005551212')
print(bool(a))
