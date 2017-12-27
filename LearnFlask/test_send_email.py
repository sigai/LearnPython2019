from flask_mail import Message
from hello import mail
msg = Message("test subject", sender="fangtiansheng@gamil.com", recipients=["vipfts@qq.com",])
msg.body = "text body"
msg.html = "<b>HTML</b> body"
with app.app_context():
    mail.send(msg)
