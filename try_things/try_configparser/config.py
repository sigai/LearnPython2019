import configparser

class Parser(configparser.ConfigParser):
    """Parse ini config file"""
    def as_dict(self):
        """
        """
        d = dict(self._sections)
        for k in d:
            d[k] = dict(d[k])
        return d
        
def load():
    config = configparser.ConfigParser()
    config.read('spider.ini')

    ua = config.get('DEFAULT', 'user_agent')
    print(ua)
    s = config['DEFAULT']
    print(dir(s))

if __name__ == '__main__':
    load()