import requests
import json
import re

def get_items_by_page_from_source(keyword, page):
    keyword = "电子烟"
    url = f"https://s.taobao.com/search?q={keyword}&bcoffset=4&ntoffset=4&p4ppushleft=0%2C48&s={page*44}"
    payload = {"_ksTS":"1512972876625_256",
            "callback":"jsonp257",
            "ajax":"true",
            "m":"customized",
            "q":"%E7%94%B5%E5%AD%90%E7%83%9F",
            "ntoffset":"4",
            "p4ppushleft":"0,48",
            "s":"36",
            "bcoffset":"0",
            "rn":"ec4407abf97c0a2e57f1aeed2d691070",}
    header = {"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3278.0 Safari/537.36"}
    res = requests.get(url, params=payload, headers=header)
    res.encoding = "utf-8"
    conf = re.search(r'g_page_config = (.*?);', res.text).group(0)
    return conf

def get_items_by_page_after_js(keyword, page):
    for i in range(page):
        url = f"https://s.taobao.com/search?q={keyword}&bcoffset=4&ntoffset=4&p4ppushleft=0%2C48&s={i*44}"
        header = {"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3278.0 Safari/537.36"}
        res = requests.get(url, headers=header)
        conf = re.search(r'g_page_config = (.*);', res.text).group(1)
        data = json.loads(conf)
        db = data['mods']['itemlist']['data']['auctions']
        
        yield db

if __name__ == '__main__':
    db = []
    for i in get_items_by_page_after_js("电子烟", 100):
        db.extend(i)
    with open(f"data{len(db)}.json", 'w', encoding="utf-8") as f:
        json.dump(db, f, indent=1, ensure_ascii=False)
