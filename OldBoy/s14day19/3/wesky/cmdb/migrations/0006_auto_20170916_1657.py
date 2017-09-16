# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-16 16:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cmdb', '0005_userinfo_user_type_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='user_group',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='cmdb.UserGroup'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='password',
            field=models.CharField(help_text='请输入8位以上密码', max_length=64, verbose_name='pwd'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='username',
            field=models.CharField(error_messages={'required': '必填'}, max_length=32),
        ),
    ]
