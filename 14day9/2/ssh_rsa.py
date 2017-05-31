#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

#私钥位置

private_key = paramiko.RSAKey.from_private_key_file("/Users/fangtiansheng/.ssh/id_rsa")
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname="192.168.44.143",port=22,username="f",pkey=private_key)
stdin,stdout,stderr = ssh.exec_command("df")
result = stdout.read().decode()
print(result)
stdin,stdout,stderr = ssh.exec_command("ifconfig")
result = stdout.read().decode()
print(result)

ssh.close()