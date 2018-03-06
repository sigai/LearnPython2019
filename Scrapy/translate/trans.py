#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"

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
        sentences.append((hashid,j, i, s))

trans = [list() for i in range(3)]

for hashid, j, i, s in sentences:
    print(hashid, j, i, s)
    trans[j].append(s)
print({hashid:trans})

