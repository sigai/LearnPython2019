import requests
from bs4 import BeautifulSoup
import re

p = re.compile(r"\d+")
addr = "http://www.jb51.net/books/list476_{i}.html"

for i in range(1,9):
    url = addr.format(i=i)
    res = requests.get(url)
    res.encoding = "gb2312"
    soup = BeautifulSoup(res.text, "html.parser")
    cur_cat_list = soup.find(class_="cur-cat-list")
    for book in cur_cat_list.find_all("li"):
        code = p.search(book.a.get("href"))
        print(code.group())



    
