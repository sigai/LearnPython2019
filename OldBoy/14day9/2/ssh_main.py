#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname='192.168.44.143',port=22,username='f',password='Shouzhudai2')
stdin, stdout,stderr = ssh.exec_command("df;ifconfig") # 可执行多个命令
res, err = stdout.read().decode(), stderr.read().decode()
result = res if res else err
print(result)
ssh.close()