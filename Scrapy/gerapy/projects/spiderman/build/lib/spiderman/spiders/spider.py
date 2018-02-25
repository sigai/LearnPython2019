import scrapy

from spiderman.items import SpidermanItem


class PeterParker(scrapy.Spider):
    name = "peter"
    start_urls = ["http://www.xiaohuar.com/hua/",]

    def parse(self, response):
        current_url = response.url
        body = response.body
        unicode_body = response.body_as_unicode()
        items = response.xpath('//div[contains(@class, "item_list")]/div')
        print(len(items))
        for i in items:
            item = SpidermanItem()
            name = i.xpath("div/div/span/text()").extract()
            school = i.xpath("div/div/a/img/@alt").extract()
            pic = i.xpath("div/div/a/img/@src").extract()

            if pic[0].endswith("php"):
                continue
            item["name"] = name[0]
            item["school"] = school[0]
            item["pic"] = "http://www.xiaohuar.com" + pic[0]
            
            yield item

