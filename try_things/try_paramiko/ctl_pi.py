#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import paramiko
import gevent


def init(ip):
    ssh = paramiko.SSHClient()

    # 这行代码的作用是允许连接不在know_hosts文件中的主机。
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    # 使用账号密码
    # ssh.connect("192.168.28.220", 22, "pi", "raspberry")

    # 使用私钥连接：
    gevent.sleep(0)
    ssh.connect(ip, 22, 'pi', key_filename='/Users/fangtiansheng/.ssh/id_rsa')
    gevent.sleep(0)
    print("processing: %s" % ip)
    gevent.sleep(0)
    stdin, stdout, stderr = ssh.exec_command('sudo poweroff')
    gevent.sleep(0)
    print(ip, '\n'.join(stdout.readlines()), sep='\t', end="*"*50+'\n')


if __name__ == '__main__':
    ips = ["192.168.28.201", "192.168.28.202", "192.168.28.203", "192.168.28.204", "192.168.28.205", "192.168.28.206", "192.168.28.207", "192.168.28.208"]
    threads = []
    for ip in ips:
        threads.append(gevent.spawn(init(ip)))
    gevent.joinall(threads)
