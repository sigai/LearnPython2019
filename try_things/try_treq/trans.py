#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
from treq import get
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


sentences = []
for j, p in enumerate(article):
    for i, s in enumerate(p.strip().split("\n")):
        sentences.append((j, i, s))

trans = [list() for i in range(3)]

for j, i, s in sentences:
    print(j, i, s)
    trans[j].append(s)
print(trans)