#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko

privet_key = paramiko.RSAKey.from_private_key_file("/User/fangtiansheng/.ssh/id_rsa")

transport = paramiko.Transport("192.168.44.143",22)
transport.connect(username="f",pkey=privet_key)
sftp = paramiko.SFTPClient.from_transport(transport)

sftp.put("from","to")
sftp.get("from","to")

transport.close()
