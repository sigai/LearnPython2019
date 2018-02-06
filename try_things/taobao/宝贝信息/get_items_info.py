from selenium import webdriver
import re
from jinja2 import Template
import json
import csv

def get_tm_item_info(url):
    driver.get(url)

    tm_count = driver.find_elements_by_class_name("tm-count")
    sales = tm_count[0].text

    tm_price = driver.find_elements_by_class_name("tm-price")
    price = tm_price[-1].text

    return sales, price


def get_store_item_info(url):
    driver.get(url)

    sell_counter = driver.find_element_by_class_name("tb-sell-counter").find_element_by_tag_name('a')
    sales = sell_counter.get_attribute('title')
    
    price = 0
    while not price:
        try:
            price = driver.find_element_by_id("J_PromoPriceNum").text
        except Exception as e:
            price = driver.find_element_by_class_name("tb-rmb-num").text

    return sales, price

def main(url):
    if "taobao" in url:
        return get_store_item_info(url)
    elif "tmall" in url:
        return get_tm_item_info(url)
    else:
        return None

if __name__ == '__main__':
    db = []
    with open("links4356.json", 'r', encoding="utf-8") as f:
        items = json.load(f)
    driver = webdriver.Firefox()
    for i, item in enumerate(items):
        url = item[1]
        print(i, url)
        if "click" in url:
            continue
        try:
            sales, price = main(url)
        except Exception as e:
            print(e)
            continue
        
        db.append({"item_id": item[0],
                "item_link": url,
                "item_pic": item[2],
                "shop_type": item[3],
                "sales": sales,
                "price": price}
                )
    with open('db.json', 'w', encoding='utf-8') as t:
        json.dump(db, t, indent=1, ensure_ascii=False)
    with open("db.csv", 'w', newline='') as f:
        writer = csv.Dictwriter(f)
        headers = list(db.keys())
        writer.writerows(db)
    driver.quit()
