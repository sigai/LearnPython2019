#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import xml.etree.ElementTree as ET
import time

new_xml = ET.Element('url')

url = ET.SubElement(new_xml,'loc')
url.text = "https://www.baidu.com/"
lastmod = ET.SubElement(new_xml,'lastmod')
lastmod.text = time.strftime("%Y-%m-%dT%H:%M:%S+00:00",time.localtime())
changefreq = ET.SubElement(new_xml,'changefreq')
changefreq.text = "weekly"
priority = ET.SubElement(new_xml,'priority')
priority.text = str(0.60)

sitemap = ET.ElementTree(new_xml)
sitemap.write("sitemap.xml",encoding='utf-8',xml_declaration=True)