#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

# 指定私钥位置
private_key = paramiko.RSAKey.from_private_key_file("id_rsa")

# 创建SSHClient实例
ssh = paramiko.SSHClient()

# 设置允许不在know_hosts文件的主机连接
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# 用私钥连接已经有该主机公钥的主机的用户
ssh.connect(hostname="192.168.1.127",port=22,username="fang",pkey=private_key)

# 执行命令
stdin,stdout,stderr = ssh.exec_command("df;ifconfig")
res, err = stdout.read().decode(), stderr.read().decode()

result = res if res else err
print(result)

# 关闭连接
ssh.close()
