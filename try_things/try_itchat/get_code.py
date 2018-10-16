import itchat


@itchat.msg_register(itchat.content.TEXT)
def reply(msg):
    print(msg)
    return msg["Text"]


itchat.auto_login(hotReload=True)
itchat.send("hello", toUserName='@8738071a310e7ffb064ceebf8402f1c0')

itchat.run()