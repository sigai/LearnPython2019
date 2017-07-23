#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

transport = paramiko.Transport(("192.168.44.143",22))
transport.connect(username="f",password="Shouzhudai2")
sftp = paramiko.SFTPClient.from_transport(transport)
sftp.put("1","/home/f/.ssh/authorized_keys")
#sftp.get("/home/f/.ssh/authorized_keys","authorized_keys")
transport.close()