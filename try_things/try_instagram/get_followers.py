from pprint import pprint as pp
import json
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

url = "https://www.instagram.com/accounts/login/"

chrome_options = Options()
browser = webdriver.Chrome(chrome_options=chrome_options)
browser.implicitly_wait(10)

browser.get(url)
username = browser.find_element_by_name("username")
# username.clear()
username.send_keys("fangtiansheng@gmail.com")
password = browser.find_element_by_name("password")
# password.clear()
password.send_keys("liandan713824")
login = browser.find_element_by_tag_name("button")
login.click()

user = "https://www.instagram.com/king_of_spaces/?__a=1"
browser.get(user)
