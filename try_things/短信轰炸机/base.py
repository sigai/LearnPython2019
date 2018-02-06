class Site(object):

    def __init__(self, tel):
        self.tel = tel

    def register(self):
        pass

    def forget(self):
        pass

class Test(Site):

    def register(self):
        return self.tel + "register"

    def forget(self):
        return self.tel + "forget"

for sub in Site.__subclasses__():
    print(sub('123').register())
