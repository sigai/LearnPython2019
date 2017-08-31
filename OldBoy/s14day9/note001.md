#堡垒机
##scp
scp -rp <user>@<host> -P<port>
usage: scp [-12346BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]
           [-l limit] [-o ssh_option] [-P port] [-S program]
           [[user@]host1:]file1 ... [[user@]host2:]file2


##paramiko
http://www.paramiko.org/
paramiko是一个py2.6+ 和py3.3+的基于ssh v2协议的实现, 提供客户端和服务端的功能, paramiko利用Python的C扩展实现底层加密, paramiko本身是纯Python接口的SSH网络.
paramiko支持以加密和认证的方式，进行远程服务器的连接。如果需要使用SSH从一个平台连接到另外一个或多个平台，进行一系列的操作时，paramiko是最佳工具之一。
ftp
ssh 返回的都是bytes格式, 并不能执行top类似的命令

##ssh原理
https://baike.baidu.com/item/ssh/10407
know_hosts文件中保存主机RSA
~/.ssh/know_hosts

##RSA
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
