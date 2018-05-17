# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class ProxyPipeline(object):
    def process_item(self, item, spider):
        if 0 < item['delay'] < 5:
            spider.red.sadd("proxies", "%s:%s"%(item['ip'], item['port']))
            spider.logger.info("Proxy: %s:%s delay: %s"%(item['ip'], item['port'], item['delay']))
            spider.items.append(item)
        return item

