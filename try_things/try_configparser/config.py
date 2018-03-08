import configparser
from pprint import pprint


class Parser(configparser.ConfigParser):
    """Parse ini config file"""
    def as_dict(self):
        """
        return config as dict type.
        """
        d = dict(self._sections)
        for k in d:
            d[k] = dict(d[k])
        return d
        
def main():
    cfg = Parser()
    cfg.read('spider.ini')
    pprint(cfg.as_dict())

if __name__ == '__main__':
    main()
