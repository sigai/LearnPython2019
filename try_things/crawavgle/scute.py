import requests
from mongoengine import Document, StringField, IntField, BooleanField, FloatField, connect

connect("avgle")


class Video(Document):
    title = StringField()
    keyword = StringField()
    channel = StringField()
    duration = FloatField()
    framerate = FloatField()
    hd = BooleanField()
    addtime = IntField()
    viewnumber = IntField()
    likes = IntField()
    dislikes = IntField()
    video_url = StringField()
    embedded_url = StringField()
    preview_url = StringField()
    preview_video_url = StringField()
    private = BooleanField()
    vid = StringField()
    uid = StringField()

    def __str__(self):
        return f"<{self.vid}:{self.title}>"


def get_all():
    """Get All videos"""
    proxies = {"http":"http://127.0.0.1:1087", "https":"http://127.0.0.1:1087"}

    page = 0
    videos = []
    while True:
        url = f"http://api.avgle.com/v1/search/s-cute/{page}?limit=10&o=tf"
        print(f"[+] crawl s-cute page: {page}")
        res = requests.get(url, proxies=proxies)
        res = res.json()
        if res["success"]:
            for video in res["response"]["videos"]:
                videos.append(video)
                print(video)
        if res["response"]["has_more"]:
            page += 1
        else:
            return videos


def to_db(video=None):
    if not video:
        return
    if Video.objects(vid=video['vid']).first():
        return
    doc = Video(**video)
    doc.save()
    print(f"[+] saved {doc}")


def main():
    res = get_all()
    for video in res:
        to_db(video)

if __name__ == '__main__':
    main()