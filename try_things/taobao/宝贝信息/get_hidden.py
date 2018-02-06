import json
from pathlib import Path
import re

with open("data4392.json", 'r', encoding='utf-8') as j:
    db = json.load(j)

with open("links4404.txt", 'r', encoding='utf-8') as t:
    links = json.load(t)

all_id = []

for item in db:
    if "tmall" in item["detail_url"]:
        continue
    nid = re.search(r'id=(\d+)&', item["detail_url"])
    if nid:
        all_id.append(nid.group(1))


ids = []

for link in links:
    if "tmall" in link:
        continue
    nid = re.search(r'id=(\d+)&',link)
    if nid:
        ids.append(nid.group(1))
print(len(all_id), len(ids))
s =  set(ids) | set(all_id)

print(len(s))