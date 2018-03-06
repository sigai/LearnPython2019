# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request

class TranslaterSpider(scrapy.Spider):
    name = 'translater'
    allowed_domains = ['translate.google.com']


    def start_requests(self):
        hashid = "da87bb07-ea28-4540-a9d5-a789cc04dde1"
        title = "G'day ... Is there ANY way in Windows 7 64 to change the compatibility tab of cmd.exe or command.com ??"
        question = """cmd.exe command.com"""
        replies = """Hello hxl7,
        Thank you for posting on Microsoft Answers Forums.
        To answer your question, no you cannot change the compatibility settings on cmd.exe.
        If you require further assistance please come back and post, we are more than happy to help you out.
        Regards,
        What exactly do you want to change on the Compatibility tab?
        """
        article = [title, question, replies]
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={lang}&dt=t&q={s}"

        sentences = []
        for j, p in enumerate(article):
            for i, s in enumerate(p.strip().split("\n")):
                sentences.append((hashid, j, i, s))

        for hashid, j, i, s in sentences:
            request = Request(url.format(lang='zh-CN', s=s), meta={'j':j,'i':i, 'hashid':hashid})
            yield request

    def parse(self, response):
        print(response.body.decode('utf-8'))
        print(response.meta['hashid'], response.meta['j'], response.meta['i'])
