#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"  # date: 2018/1/3
import scrapy


class AuthorSpider(scrapy.Spider):
    name = 'author'

    start_url = ['http://quotes.toscrape.com/']

    def parse(self, response):
        for href in response.css('.author + a::attr(href)'):
            yield response.follow(href, self.parse_author)

        for href in response.css("li.next a::attr(href)"):
            yield response.follow(href, self.parse)

    def parse_author(self, response):
        def extract_with_css(query):
            return response.css(query).extract_first().strip()

        yield {
            'name': extract_with_css('h3.author-title::text'),
            'birthdate': extract_with_css('.author-born-date::text'),
            'bio': extract_with_css('.author-description::text'),
        }
