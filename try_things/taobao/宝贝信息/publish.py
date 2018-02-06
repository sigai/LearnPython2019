from jinja2 import Template
import json

with open("db.json", 'r', encoding="utf-8") as f:
    db = json.load(f)
with open('index.html', 'r', encoding='utf-8') as t:
    h = t.read()
tmp = Template(h)
with open('info.html', 'w', encoding='utf-8') as f:
    f.write(tmp.render(items=db))
