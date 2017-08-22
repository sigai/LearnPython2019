#!/bin/bash
#
# 初始化系统脚本
#
# 适用centos6 和centos7
#
#


PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
cur_dir=$(pwd)
gcc_version=`rpm -qa gcc | awk -F '[-]' '{print $2}'`

VERSION=`cat /etc/issue | grep '6.'`
if [ "$VERSION" == "" ];then
    VERSION='centos7'
else
    VERSION='centos6'
fi

#更改为163的源
yum install wget -y
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
if [ $VERSION == 'centos7' ];then
    wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
    mv CentOS7-Base-163.repo  /etc/yum.repos.d/CentOS-Base.repo
else
    wget http://mirrors.163.com/.help/CentOS6-Base-163.repo
    mv CentOS6-Base-163.repo  /etc/yum.repos.d/CentOS-Base.repo
fi
yum clean all
yum makecache

#更改ulimit参数
if [ "`cat /etc/security/limits.conf | grep 'soft nproc 65535'`" = "" ]; then
cat  >> /etc/security/limits.conf << EOF
* soft nproc 65535
* hard nproc 65535
* soft nofile 65535
* hard nofile 65535
EOF
echo "ulimit -SHn 65535" >> /etc/profile
echo "ulimit -SHn 65535" >> /etc/rc.local
fi

#安装必要工具
yum update -y
yum install -y vim wget ntpdate sysstat wget man mtr lsof iotop net-tools openssl-devel openssl-perl iostat subversion nscd

#关闭selinux
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
setenforce 0

#设置ssh
sed -i "s/\#UseDNS yes/UseDNS no/g" /etc/ssh/sshd_config
sed -i "s/GSSAPIAuthentication yes/GSSAPIAuthentication no/g" /etc/ssh/sshd_config

#设置时区
if [ "`cat /etc/crontab | grep ntpdate`" = "" ]; then
echo "0 23 * * * root /usr/sbin/ntpdate cn.pool.ntp.org >> /var/log/ntpdate.log" >> /etc/crontab
fi
rm -f /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ntpdate cn.pool.ntp.org;hwclock -w


#设置sysctl
SYSCONF="
#Add
net.ipv4.tcp_max_syn_backlog = 65536
net.core.netdev_max_backlog =  32768
net.core.somaxconn = 32768

net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2

net.ipv4.tcp_tw_recycle = 1
#net.ipv4.tcp_tw_len = 1
net.ipv4.tcp_tw_reuse = 1

net.ipv4.tcp_mem = 94500000 915000000 927000000
net.ipv4.tcp_max_orphans = 3276800

net.ipv4.tcp_fin_timeout = 120
net.ipv4.tcp_keepalive_time = 120
net.ipv4.ip_local_port_range = 1024  65535

net.nf_conntrack_max = 16404388
net.netfilter.nf_conntrack_tcp_timeout_established = 10800

#kernel: TCP: time wait bucket table overflow
net.ipv4.tcp_max_tw_buckets = 30000

fs.file-max=655350"

#"安装系统工具"
yum install -y gcc gcc-c++ make cmake autoconf bzip2 bzip2-devel curl openssl openssl-devel rsync gd zip perl unzip

#重启服务
#ssh
if [ "$VERSION" == "centos6" ]; then
    service sshd restart
    service iptables stop
    chkconfig iptables off
    if [ "`cat /etc/sysctl.conf | grep net.ipv4.tcp_max_tw_buckets`" = "" ]; then
        echo "$SYSCONF" >> /etc/sysctl.conf    
    fi
    /sbin/sysctl -p
else
    systemctl restart sshd
    systemclt disable postfix.service
    systemctl stop postfix.service
    systemctl stop firewalld
    systemctl mask firewalld
    yum install iptables-services -y
    if [ ! -f '/etc/sysctl.d/addsys.conf' ];then
        echo "$SYSCONF" >> /etc/sysctl.d/addsys.conf 
    fi 
    /sbin/sysctl -p
fi