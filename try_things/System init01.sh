#!/bin/bash

function readme()
{
echo ==========编写一个关于centos7 最小化系统安装后 需要设置的东西 ==========
echo ==========1、默认执行dhclient，获取IP地址 ========== (这句写的太废话了，自己承认错误)
echo ==========2、安装基本的包，包括ifconfig、netstat、wget、vim命令 ==========
echo ==========3、更换阿里云yum源"(可选择更换，也可选择不更换)" ==========
echo ==========4、设置自动更新时间,"自动更新时间为每天1点" ==========
echo ==========5、安装常用系统工具 ==========
echo ==========6、配置基础java环境 ==========
echo ==========输入任意字符、执行退出操作 ==========
echo "请输入您的选择" 
read num
#sleep 5
}

function one(){ 
echo "系统安装以后 直接先使用dhclient来进行获取IP地址"
sleep 2
dhclient
echo "获取到的IP地址为" +`ip addr | grep inet | grep 192.*.*.*`  
}

function two(){
echo "确认网络没有问题了，安装一些常用的类库包"
sleep 2
yum install -y vim wget ntpdate sysstat wget man mtr lsof iotop net-tools
}

function three(){
 echo "更换阿里云yum源"
 sleep 2
 cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
 wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
 yum makecache
}
function four(){
   echo "设置自动更新时间"
   if [ `cat  /etc/crontab | grep ntpdate | wc -l` -gt 0 ]
   then 
       echo "您已经设置自动时间同步的服务器"
   else 
       echo "0 0 * * * root /usr/sbin/ntpdate cn.pool.ntp.org" >> /etc/crontab 
   fi
}
function five(){
    echo "安装常见的开发类库"
    yum install -y gcc gcc-c++ make cmake autoconf bzip2 bzip2-devel curl openssl openssl-devel rsync gd zip perl unzip lrzsz
}
function six(){
    echo "安装java jdk 环境"
    tar -zxvf java.tar.gz -C /usr/local/
    java_version=jdk1.8.0_91
cat >> /etc/profile << END
    export JAVA_HOME=/usr/local/$java_version
    export PATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH
    export CLASSPATH=.:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
END

source /etc/profile

echo "java 环境安装完成请查看"
}

#调用readme函数
readme
while [ $num -lt 7 ] 
do
case $num in 
   1) 
     one
     readme
   ;;
   2) 
     two
     readme
   ;;
   3) 
     three
     readme
   ;;
   4)
     four
     readme
   ;;
   5) 
     five
     readme
   ;;
   6)
    six
    readme
   ;;
   *)
     echo "欢迎您的使用"
   ;;
esac
done