#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

# 创建SSHClient对象, 生成实例
ssh = paramiko.SSHClient()

# 允许不在know_hosts文件中的主机链接
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# 链接服务器
ssh.connect(hostname='192.168.1.127',port=22,username='fang',password='liandan713824')

# 执行命令 返回输入命令, 结果, 如果出错返回错误, 结果和错误同时只有一个有结果
stdin, stdout, stderr = ssh.exec_command("l") # 可执行多个命令

# 三元运算, 统一获取结果
res, err = stdout.read().decode(), stderr.read().decode()
result = res if res else err
print(result)

# 关闭链接
ssh.close()
