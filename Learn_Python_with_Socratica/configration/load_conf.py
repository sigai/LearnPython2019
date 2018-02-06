import configparser
config = configparser.ConfigParser()
print(config.sections())
config.read("conf.cfg")
print(config.sections())
print("bitbucket.ort" in config)
print("bytebong.com" in config)
print(config["bitbucket.org"]["User"])
print(config['DEFAULT']['Compression'])
topsecret = config["topsecret.server.com"]
print(topsecret["ForwardX11"])
print(topsecret["Port"])
for key in config["bitbucket.org"]:
    print(key)
print(config["bitbucket.org"]["ForwardX11"])
