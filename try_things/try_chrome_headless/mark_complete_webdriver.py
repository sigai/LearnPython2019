#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
from pathlib import Path
import logging
from time import sleep
import sys

import pymongo
from selenium import webdriver
from selenium.webdriver.ie.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException

opener = webdriver.Safari()
opener.implicitly_wait(60)
opener.maximize_window()

logging.basicConfig(level=logging.DEBUG, format="[%(asctime)s]-%(name)s-%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

def signin():
    opener.get("https://accounts.google.com/ServiceLogin/signinchooser?hl=en")
    identfier = opener.find_element_by_id("identifierId")
    identfier.clear()
    identfier.send_keys("gugetongji0910@gmail.com")
    identifierNext = opener.find_element_by_id("identifierNext")
    identifierNext.click()
    sleep(2)
    password = opener.find_element_by_name("password")
    password.send_keys("weisitianyu")
    passwordNext = opener.find_element_by_xpath("//div[@id='passwordNext']/content/span")
    sleep(1)
    passwordNext.click()


def mark():
    opener.get("https://translate.google.com/toolkit/list?hl=en")
    sleep(5)
    flag = True
    while flag:
        text = opener.find_element_by_id("displayspan").text
        if "Loading" in text:
            js = "var q=document.body.scrollTop=10000"
            opener.execute_script(js)
            sleep(10)
        else:
            flag = False
            print("[!] load completed")
    sleep(5)
    opener.implicitly_wait(20)
    table = opener.find_elements_by_xpath("//tbody/tr")
    for tr in table[::-1]:
        percent = tr.find_element(By.XPATH, "td[2]/div/div[3]").text.split()[0][:-1]
        print(percent)
        if int(percent) == 100:
            continue
        print(opener.window_handles)
        sleep(5)
        tr.click()
        tabs = opener.window_handles
        opener.switch_to.window(tabs[-1])
        sleep(10)
        flag = True
        while flag:
            try:
                confirm = opener.find_element_by_xpath('//div[@class="modal-dialog gtc-dialog-confirm"]')
                ok = confirm.find_element(By.XPATH, "div[3]/button[@name='ok']")
            except Exception as e:
                complete = opener.find_element_by_id(":1z")
                sleep(1)
                complete.click()
                sleep(1)
            else:
                flag = False
        # ActionChains(opener).move_to_element(ok).context_click(ok).perform()
        if ok:
            print("[!] confirm dialog, waiting for clicking")
        ok.click()
        flag = True
        while flag:
            text = opener.find_element_by_id("displayspan").text
            if "marked" in text:
                flag = False
            else:
                sleep(1)
                print("[!] confirm please")
        else:
            opener.close()
            tabs = opener.window_handles
            opener.switch_to.window(tabs[0])
    else:
        opener.close()


def main():
    signin()
    sleep(5)
    mark()

if __name__ == '__main__':
    main()
    sys.exit(0)