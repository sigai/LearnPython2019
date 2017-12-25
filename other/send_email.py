import smtplib
from email.mime.text import MIMEText
from email.header import Header


mail_host = "smtp.qq.com"
mail_user = "vipfts"
mail_pass = "shouzhudaitu"

sender = "vipfts@qq.com"
receivers = ["vipfts@qq.com", ]

message = MIMEText("1", "plain", "utf-8")
message["From"] = Header("2", "utf-8")
message["To"] = Header("3", "utf-8")

subject = "4"
message["Subject"] = Header(subject, "utf-8")

try:
    smtp_obj = smtplib.SMTP()
    smtp_obj.connect(mail_host, 465)
    smtp_obj.login(mail_user, mail_pass)
    smtp_obj.sendmail(sender, receivers, message.as_string())
    smtp_obj.quit()
    print("Email Send...")
except smtplib.SMTPException as e:
    print(e)
