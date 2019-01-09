import requests
from pathlib import Path
from pprint import pprint
from PIL import Image

api_key = "XdqSGoExiMUS0MY8wR9Gv5Z4p_PcVxYb"
api_secret = "hhkEstwr6zf2hvWgXuGn2j-f3sayJosT"

id_card_ocr_url = "https://api-cn.faceplusplus.com/cardpp/v1/ocridcard"
face_dectect_url = "https://api-cn.faceplusplus.com/facepp/v3/detect"

path = Path("a未识别")

data = {"api_key":api_key,
        "api_secret": api_secret}

def get_result(p):
    files = {"image_file": p.read_bytes()}
    res = requests.post(face_dectect_url, data=data, files=files)
    return res.json()

for p in path.rglob("*.jpg"):
    if "IMG_4771" != p.stem:
        continue
    # if p.stat().st_size >= 500:
    #     continue
    im = Image.open(p)
    im.show()
    res = get_result(p)
    pprint(res)
    print(p)
    break
