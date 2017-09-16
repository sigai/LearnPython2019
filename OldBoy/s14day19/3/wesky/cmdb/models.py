from django.db import models

# Create your models here.


class UserInfo(models.Model):

    username = models.CharField(max_length=32, error_messages={"required": ("必填")})
    password = models.CharField(max_length=64,help_text="请输入8位以上密码",verbose_name="pwd")
    email = models.EmailField(max_length=64)
    gender = models.CharField(max_length=10, null=True)
    ctime = models.DateTimeField(auto_now_add=True, null=True)
    utime = models.DateTimeField(auto_now=True, null=True)

    user_types = (
        (1, "超级管理员"),
        (2, "管理员"),
        (3, "普通用户"),
    )
    user_type_id = models.IntegerField(choices=user_types, default=3)

    user_group = models.ForeignKey("UserGroup", to_field="uid", default=1)

class UserGroup(models.Model):

    uid = models.AutoField(primary_key=True)
    caption = models.CharField(max_length=32)
    ctime = models.DateTimeField(auto_now_add=True, null=True)
    utime = models.DateTimeField(auto_now=True, null=True)


