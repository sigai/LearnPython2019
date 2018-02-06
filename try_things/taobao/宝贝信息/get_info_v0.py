import requests
import json
import re
from pathlib import Path
from selenium import webdriver


def get_item_info(obj):
    item = obj.find_element_by_tag_name("a")
    item_id =item.get_attribute("data-nid")
    item_link = "http:"+item.get_attribute("data-href")

    if "click" in item_link:
        shop_type = "AD"
    elif "tmall" in item_link:
        shop_type = "T"
    elif "taobao" in item_link:
        shop_type = "C"
    else:
        shop_type = None

    img = item.find_element_by_tag_name("img")
    pic_url = "http:"+img.get_attribute("data-src")

    return item_id, item_link, pic_url, shop_type

def get_items_by_page(keyword, page):
    for i in range(page):
        url = f"https://s.taobao.com/search?q={keyword}&bcoffset=4&ntoffset=4&p4ppushleft=0%2C48&s={i*44}"
        driver.get(url)
        details = []
        res = driver.find_elements_by_class_name("J_MouserOnverReq")
        for item in res:
            details.append(get_item_info(item))
        yield details

if __name__ == '__main__':
    driver = webdriver.Firefox()
    db = []
    for i in get_items_by_page("电子烟", 100):
        db.extend(i)
    with open(f"links{len(db)}.json", 'w', encoding="utf-8") as f:
        json.dump(db, f, indent=1, ensure_ascii=False)
    print(len(db))
    driver.quit()
