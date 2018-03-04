#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"


from requests_html import HTMLSession

session = HTMLSession()
for i in range(10):
    r = session.get("https://answers.microsoft.com/zh-hans/windows/forum/windows_xp-performance/wmic-path-win32scheduledjob-call-create/aaea382c-5a97-4c8d-90a2-e3a9f69e8a8e")

    print(r.elapsed)
