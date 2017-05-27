#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname='c1.salt.com',port=22,username='vipfts',password='liandan713824')
stdin, stdout,stderr = ssh.exec_command("df")
result = stdout.read()
ssh.close()