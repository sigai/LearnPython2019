#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

addr = ("192.168.1.127",22)

# 创建Transport实例(应该是这里就创建了通道)
transport = paramiko.Transport(addr)    # 公司虚拟机

# 链接认证(这里应该是成功认证就开启通道, 否则通道就不会存在)
transport.connect(username="fang",password='liandan713824')

# 认证成功创建SFTPClient实例(在通道上创建传输载体)
sftp = paramiko.SFTPClient.from_transport(transport)

# 上传
sftp.put("b.txt","/home/fang/fuck.txt")

# 下载
#sftp.get("/home/f/.ssh/authorized_keys","authorized_keys")

# 关闭链接
transport.close()
