#scp
scp -rp <user>@<host> -P<port>

#paramiko
ftp
ssh 返回的都是bytes格式, 并不能执行top类似的命令

#ssh原理
know_hosts文件中保存主机RSA
.ssh/know_hosts

#RSA
免密码登陆
非对称密匙验证
公钥 public key
私钥 private key

host1               host2
私钥                  公钥
自己用私钥           公钥给别人

生成: ssh-keygen
将公钥文件拷贝到host用户的home目录下 给文件600权限

421  421  421
rwx  rwx  rwx
属主  属组  其他

自动拷贝到对方的命令:
ssh-copy-id [-i <public key file>] "-P<port> <user>@host"

#rz sz命令
http://www.jb51.net/LINUXjishu/163820.html



