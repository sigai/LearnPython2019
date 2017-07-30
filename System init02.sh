#!/bin/bash
### Usage: This script use to config linux system
echo ==========centos7 最小化系统安装后 初始化脚本 by Sigai ==========

#获取IP地址 
echo "本机IP地址为:"
ip addr | grep 'inet 192' |cut -f 6 -d " "| awk -F "/" '{print $1}'


#定义系统主机名
echo "自定义主机名为: beijing"
hostname=beijing

#修改yum源
# echo "修改yum源 为阿里云"
#Change yum source to mirrors.163.com

# mv -f /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# curl -s http://mirrors.aliyun.com/repo/Centos-7.repo -o /etc/yum.repos.d/CentOS-Base.repo
# curl -s http://mirrors.163.com/.help/CentOS6-Base-163.repo -o /etc/yum.repos.d/CentOS-Base.repo
# 阿里云
# cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# yum makecache

#添加第三方的yum源
# echo "添加第三方的yum源"
#add the third-party repo
#add the epel
# rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
# rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
#add the rpmforge
# rpm -Uvh http://packages.sw.be/rpmforge-release/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm
# rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-rpmforge-dag

#生成yum缓存
# yum clean all
# yum makecache

#安装一些常用的软件
echo "安装一些常用的软件"
# yum install -y sysstat vim lrzsz ntp traceroute vixie-cron crontabs lsof pcre pcre-devel wget openssl openssl-devel rsync ntpdate man mtr iotop net-tools
yum install -y vim wget lrzsz openssl openssl-devel
#时间校正
#set ntp
echo "时间校正"
/usr/sbin/ntpdate ntp.api.bz
echo "*/5 * * * * /usr/sbin/ntpdate ntp.api.bz > /dev/null 2>&1" >> /var/spool/cron/root
#set clock

#校正硬件时钟 bios里面的时间
hwclock --set --date="`date +%D\ %T`"
hwclock --hctosys

#ulimit 修改
#set ulimit
echo "ulimit -SHn 102400" >> /etc/rc.local
cat >> /etc/security/limits.conf << EOF
*           soft   nofile       102400
*           hard   nofile       102400
*           soft   nproc        102400
*           hard   nproc        102400
EOF

#禁止使用control alt delete重启服务器
#close ctrl+alt+del
sed -i ‘s/exec \/sbin\/shutdown -r now "Control-Alt-Delete pressed"/#exec \/sbin\/shutdown -r now "Control-Alt-Delete pressed"/g‘ /etc/init/control-alt-delete.conf

#修改运行级别，修改成默认为3
sed -i ‘s/^id:5:initdefault:/id:3:initdefault:/‘ /etc/inittab

#关闭所有的服务的开机启动，只打开部分需要的服务
### service config
for i in `chkconfig --list | awk ‘{print $1}‘ `; do echo $i; chkconfig $i off; done
for i in sshd network crond sysstat acpid irqbalance iptables rsyslog ntpdate ; do chkconfig $i on; done

#添加系统需要的用户
### Add new user.
# useradd developer
# echo ‘Hu0X!nG%12‘ | passwd --stdin developer
# chage -d 0  developer


#允许哪些用户有sudo的权限
# chmod u+w /etc/sudoers
# echo -e "lyp_hx ALL=(ALL)  ALL\ndeveloper ALL=(ALL)  ALL" >> /etc/sudoers
# chmod u-w /etc/sudoers

#让所有的网卡开机自动启动
#network start with system.
sed -i s/ONBOOT=no/ONBOOT=yes/g  /etc/sysconfig/network-scripts/ifcfg-eth0
sed -i s/ONBOOT=no/ONBOOT=yes/g  /etc/sysconfig/network-scripts/ifcfg-eth1

#禁止使用密码登录 
### sshd config
# sed  -i s/"PasswordAuthentication yes"/"PasswordAuthentication no"/g /etc/ssh/sshd_config 

#添加ssh的密钥
# [ ! -d /root/.ssh ] &&  mkdir -p /root/.ssh/
# chmod 700 /root/.ssh/
# echo "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAyVbaOb8yYSOfcfKXQo0zzOFlpUDAAxltM5lo44E0QG5IFtKe5NpUhl/3shOoS78SS6mfADF5+S+jyB/d32CwsG0M4P9ZcX4wt5vNrVuCyud3VF6qhYjuEx28T8L7EjGIHZdNto7mlc8nK2+juE4JxuMXwYknpb22zOR/j1DQcsysymvfgqsHVG2C0cyPCYffzO4baik68KSiyuECl2IQZtj611fHZkFk6jqxFUUav6vwXTBf/RCHYwo8l15IuiPK5YtHT0iLbbXOxlC8G24QAIaPU5FfX445qpd4iCwhYUIcGQAZXCXRwWCODUsTO/D6GtPB2fB1fnPTxUTkzQfe1Q== liyuanpeng@corp.the9.com
# #key" > /root/.ssh/authorized_keys

#重启sshd
/etc/init.d/sshd restart
#修改服务器的DNS
### set dns server
echo -e "nameserver 114.114.114.114\nnameserver 8.8.8.8" > /etc/resolv.conf

#给一些自定义的脚本一些可执行权限
chmod a+x /opt/scripts/*.sh

#关闭SELinux 
###disable selinux 
sed -i ‘s/SELINUX=enforcing/SELINUX=disalbed/g‘ /etc/selinux/config
echo

#把一些服务添加到开机启动
echo ‘bash /opt/zabbix/zabbix_agentd.sh‘ >> /etc/rc.local
echo ‘bash /opt/scripts/firewall_kvm.sh‘ >> /etc/rc.local
echo ‘cd /opt/scripts;nohup /opt/scripts/ssh_deny.sh &‘ >> /etc/rc.local

#把hostname写到配置文件中
echo ‘NETWORKING=yes‘ > /etc/sysconfig/network
echo "HOSTNAME=$hostname" >> /etc/sysconfig/network

#设置vim语法高亮
##Set vim 
echo ‘syntax on‘ > /root/.vimrc

#修改内核参数
###sysctl
cat >> /etc/sysctl.conf << END
net.ipv4.ip_forward = 0
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.default.accept_source_route = 0
kernel.sysrq = 0
kernel.core_uses_pid = 1
net.ipv4.tcp_syncookies = 1
kernel.msgmnb = 65536
kernel.msgmax = 65536
kernel.shmmax = 68719476736
kernel.shmall = 4294967296
net.core.wmem_max = 873200
net.core.rmem_max = 873200
net.core.somaxconn = 256
net.core.netdev_max_backlog = 1000
net.ipv4.ip_local_port_range = 5000 65000
net.ipv4.tcp_mem = 786432  1048576 1572864
net.ipv4.tcp_wmem = 8192  436600  873200
net.ipv4.tcp_rmem = 32768  436600  873200
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_retries2 = 5
net.ipv4.tcp_keepalive_time = 1800
net.ipv4.tcp_keepalive_intvl = 30
net.ipv4.tcp_keepalive_probes = 3
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_max_tw_buckets = 20000
net.ipv4.conf.lo.arp_ignore = 1
net.ipv4.conf.lo.arp_announce = 2
net.ipv4.conf.all.arp_ignore = 1
net.ipv4.conf.all.arp_announce = 2
END
modprobe bridge

#让修改后的内核参数生效
/sbin/sysctl -p

#添加执行命令的路径
#Add PATH environment.
echo ‘export PATH=$PATH:/opt/node/bin:/opt/node/lib/node_modules/npm/bin/node-gyp-bin‘ >> /etc/profile
cat  << EOF
+------------------------------------------------------------------+
|                     === SYSTEM INIT OVER ===                     |
+------------------------------------------------------------------+
+------------------------------------------------------------------+
EOF
echo "###############################################################"
#重启
###reboot
sleep 10
reboot