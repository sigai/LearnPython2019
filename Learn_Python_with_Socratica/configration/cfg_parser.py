import configparser
import os

config = configparser.ConfigParser()
config["default"] = {"ServerAliveInterval": '45',
                    "Compression": "yes",
                    "CompressionLevel": "9"}
config["bitbucket.org"] = {}
config["bitbucket.org"]["User"] = "vipfts"
config["topsecret.server.com"] = {}
topsecret = config["topsecret.server.com"]
topsecret["Port"] = "50022"
topsecret["ForwardX11"] = "no"
config["default"]["ForwardX11"] = "yes"

with open("test.ini", 'w', encoding='utf-8') as f:
    config.write(f)
