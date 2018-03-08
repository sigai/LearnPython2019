# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class TranslatePipeline(object):
    def open_spider(self, spider):
        """
        load data and format to linked-list then save to redis
        :param spider:
        :return:
        """
        self.articles = {}

    def process_item(self, item, spider):
        """
        save trans sents to redis and mark a flag
        :param item:
        :param spider:
        :return:
        """
        agt_id = item['agt_id']
        type_id = item['type_id']
        sentence_id = item['sentence_id']
        sentence = item['sentence']

        self.articles.setdefault(agt_id, list()).append((type_id, sentence_id, sentence))

        return item

    def close_spider(self, spider):
        """
        merge sents back to article and save to database
        :param spider:
        :return:
        """
        self.trans = {}
        for agt_id, sentences in self.articles.items():
            trans = [list() for i in range(3)]
            matrix_raw = sorted(sentences)
            matrix = repaire_matrix(matrix_raw)
            print(matrix)

            title = ''.join(matrix[0])
            content = ''.join(matrix[1])
            replies = ''.join(matrix[2])

            self.trans[agt_id] = {'title':title, 'content':content, 'replies':replies}
            print(self.trans)


def repaire_matrix(raw):
    """
    getback the '\n'
    :param raw:
    :return:
    """
    matrix = []
    type_ids = {i[0] for i in raw}
    for type_id in type_ids:
        type_len = max([i[1] for i in raw if i[0]== type_id]) + 1
        matrix.append(["\n" for i in range(type_len)])

    for type_id, sentence_id, sentence in sorted(raw):
        matrix[type_id][sentence_id] = sentence

    return matrix
