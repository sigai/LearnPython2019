#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''词频统计'''
import requests
from bs4 import BeautifulSoup
import operator
from pprint import pprint


def start(url):
    word_list = []
    source_code = requests.get(url).text
    soup = BeautifulSoup(source_code)
    for post_text in soup.find_all('p', ):
        content = post_text.string
        pprint(content)
        words = content.lower().split()
        for each_word in words:
            print(each_word)
            word_list.append(each_word)
    clean_up_list(word_list)


def clean_up_list(word_list):
    clean_up_list = []
    for word in word_list:
        symbols = "!@#$%^&*()_+-=`~{}|[]\;':\",./<>?"
        for i in range(len(symbols)):
            word = word.replace(symbols[i], "")
        if len(word) > 0:
            clean_up_list.append(word)

def create_dictionary(clean_world_list):
    word_count = {}
    for word in clean_up_list:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    for key, value in sorted(word_count.items(),key=operator.attrgetter(1)):
        print(key,value)

start("http://jandan.net/duan")



















