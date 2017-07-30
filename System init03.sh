#!/bin/bash   
#=============================================================================== 
#          FILE: linux_init.sh 
#  
#   DESCRIPTION: This script is used to install usual libs, close unnecessary services，optimize kernel parameters and so on 
#        BLOG: http://waydee.blog.51cto.com/#  
#       CREATED: 2012-4-17 11:27:19 
#      REVISION: 1.0  
#=============================================================================== 
 
set -o nounset                              # Treat unset variables as an error 
 
 
#############  VARIABLES DEFINED #############  
SRV_TEMP="/tmp/chkconfig_list.tmp"   #SRV_TEMP keep result from chkconfig command 
 
SRV_ON="NetworkManager acpid auditd  crond haldaemon iptables irqbalance kudzu lvm2-monitor mcstrans messagebus microcode_ctl netfs network portmap readahead_early restorecond smartd sshd syslog xfs xinetd yum-updatesd"     #add services to this VARIABLES if you want to start them  when linux start 
 
INSTALL_LIBS="gcc gcc-c++ autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5-devel libidn libidn-devel openssl openssl-devel nss_ldap openldap openldap-devel  openldap-clients libxslt-devel libevent-devel libtool-ltdl bison libtool vim-enhanced"    # the libs files will be used later 
 
HISTORY_DIR="/var/log/.history"  #the dir where to log user command 
 
DONE="\e[0;32m\033[1mdone\e[m" 
 
ADMIN_USER="test1 test2 test3" #default users who are administrators 
 
DEFAULT_PASSWD="123456"  #set the default password for administrators,it will be changed when user first login   
 
# install EPEL  
if [ ! -e /etc/yum.repos.d/epel.repo ] 
then 
    rpm -ivh http://dl.fedoraproject.org/pub/epel/5/i386/epel-release-5-4.noarch.rpm 1>/dev/null 
    echo -e "Install EPEL source ${DONE}." 
fi 
 
# install usual libs 
yum -y install ${INSTALL_LIBS} 1>/dev/null 
echo -e "Install the usual libs ${DONE}." 
 
 
# close all services and set necessary services on  
chkconfig  --list | awk '{print $1}' > ${SRV_TEMP} 
 
# close all services  
while read SERVICE 
do 
    chkconfig --level 345 ${SERVICE} off 1>/dev/null  
 
done < ${SRV_TEMP} 
 
#open necessary services  
for SRVS in ${SRV_ON} 
do 
    if [ -e /etc/init.d/${SRVS} ] 
    then  
        chkconfig --level 345 ${SRVS} on 1>/dev/null 
    else 
        echo -e "Service ${SRVS} is \e[0;31m\033[1mnot exits\e[m." 
    fi 
     
done 
 
#check if the server is vmware virtual machine 
chkconfig  --list|grep vmware* 2>&1 /dev/null 
GREP_STATUS=$? 
if [[ ${GREP_STATUS} == 0 ]] 
then 
    chkconfig --level 345 vmware on 1>/dev/null  
    chkconfig --level 345 vmware-USBArbitrator on 1>/dev/null  
    chkconfig --level 345 vmware-workstation-server on 1>/dev/null  
    chkconfig --level 345 vmware-wsx-server on 1>/dev/null  
    chkconfig --level 345 vmamqpd on 1>/dev/null  
fi 
 
echo -e "Stop unnecessary services ${DONE}." 
 
 
# set selinux disabled 
sed -i s/SELINUX=enforcing/SELINUX=disabled/  /etc/selinux/config  
echo -e "Set SELinux disabled ${DONE}." 
 
# set LANG en_US.UTF-8 
sed -i s/LANG=.*$/LANG="en_US.UTF-8"/  /etc/sysconfig/i18n  
echo -e "Set LANG en_US.UTF-8 ${DONE}." 
 
# set history 100 
sed -i s/HISTSIZE=.*/HISTSIZE=100/  /etc/profile 
echo -e "Set history 100 ${DONE}." 
 
#log every command for every user 
if [ ! -d ${HISTORY_DIR} ] 
then 
    mkdir -p ${HISTORY_DIR} 
    chmod -R 1777 ${HISTORY_DIR} 
fi 
 
# use PROMPT_COMMAND to log every user command  
more /etc/profile |grep PROMPT_COMMAND 2>&1 >/dev/null  
COMMAND_STATUS=$? 
 
if [[ ${COMMAND_STATUS} != 0 ]] 
then 
#   export HISTORY_FILE="${HISTORY_DIR}/`date '+%y-%m-%d'`-`whoami`.log" 
cat>>/etc/profile<<EOF 
#log every user command  
export HISTORY_FILE="/var/log/.history/\`whoami\`-\`date '+%y-%m-%d'\`.log" 
export PROMPT_COMMAND='{ date "+%y-%m-%d %H:%M:%S - \$(who am i |awk "{print \\\$1\" \"\\\$2\" \"\\\$5}")  - \$(history 1 | { read x cmd; echo "\$cmd"; })"; } >> \$HISTORY_FILE' 
EOF 
    echo -e "Log user command ${DONE}." 
fi 
 
more /etc/rc.local|fgrep "ulimit -SHn 65535" 2>&1 >/dev/null  
ULIMIT_STATUS=$? 
 
if [[ ${ULIMIT_STATUS} != 0 ]] 
then  
#set linux  limit 
echo "* soft nofile 60000" >> /etc/security/limits.conf  
echo "* hard nofile 65535" >> /etc/security/limits.conf  
echo "ulimit -SHn 65535" >> /etc/rc.local 
echo -e "Set hard/soft limit ${DONE}." 
echo "source /etc/profile" >>/etc/rc.local 
echo "source /etc/profile" >> /root/.bash_profile 
fi  
 
#linux kernel optimize 
cat >/etc/sysctl.conf<<EOF 
net.ipv4.ip_forward = 0 
net.ipv4.conf.default.rp_filter = 1 
net.ipv4.conf.default.accept_source_route = 0 
kernel.sysrq = 0 
kernel.core_uses_pid = 1 
net.ipv4.tcp_syncookies = 1 
#net.bridge.bridge-nf-call-ip6tables = 0 
#net.bridge.bridge-nf-call-iptables = 0 
#net.bridge.bridge-nf-call-arptables = 0 
kernel.msgmnb = 65536 
kernel.msgmax = 65536 
kernel.shmmax = 68719476736 
kernel.shmall = 4294967296 
net.core.rmem_max = 873200 
net.core.wmem_max = 873200 
net.ipv4.tcp_wmem = 8192 436600 873200 
net.ipv4.tcp_rmem = 8192 436600 873200 
net.ipv4.tcp_mem = 786432 1048576 1572864 
net.ipv4.ip_local_port_range = 1024 65000 
net.ipv4.tcp_max_tw_buckets = 180000 
net.ipv4.icmp_echo_ignore_broadcasts = 1 
net.ipv4.tcp_keepalive_probes = 5 
net.ipv4.tcp_keepalive_intvl = 15 
net.ipv4.tcp_retries1 = 3 
net.ipv4.tcp_retries2 = 15 
net.ipv4.tcp_tw_recycle = 1 
net.ipv4.tcp_tw_reuse = 1 
net.ipv4.tcp_max_orphans = 131072 
net.core.somaxconn = 1024  
net.core.netdev_max_backlog = 1000 
net.ipv4.tcp_max_syn_backlog = 20480 
net.ipv4.tcp_synack_retries = 3 
net.ipv4.tcp_syn_retries = 3 
net.ipv4.tcp_window_scaling = 1 
net.ipv4.tcp_fin_timeout = 30 
net.ipv4.tcp_keepalive_time = 1800 
net.ipv4.tcp_sack = 1 
net.ipv4.tcp_timestamps = 0 
EOF 
 
#make optimize effect 
sysctl -p 1>/dev/null 
echo -e "Optimize kernel ${DONE}." 
 
 
#time set 
/usr/sbin/ntpdate  ntp.fudan.edu.cn 1>/dev/null  
 
#add to cron job 
more /var/spool/cron/root |grep "ntp.fudan.edu.cn"  2>&1>/dev/null  
NTP_STATUS=$? 
if [[ ${NTP_STATUS} != 0 ]] 
then 
cat >> /var/spool/cron/root<<EOF 
#time set  
*/5 * * * * /usr/sbin/ntpdate  ntp.fudan.edu.cn  
EOF 
    echo -e "Time ntpdate set ${DONE}." 
fi  
 
#add default administrators  
for ADMIN in ${ADMIN_USER} 
do 
    if cat /etc/passwd |awk -F: '{print $1}'|grep ${ADMIN}  2>&1 >/dev/null 
    then 
        echo -e "User ${ADMIN} has been \e[0;32m\033[1madded\e[m." 
    else 
        #add new user, change password when user login  
        useradd ${ADMIN} 
        echo "${DEFAULT_PASSWD}" | passwd --stdin ${ADMIN} 2>&1 >/dev/null 
        usermod -L ${ADMIN} 
        chage -d 0 ${ADMIN} 
        usermod -U ${ADMIN} 
        echo -e "Add User \e[0;32m\033[1m${ADMIN}\e[m done."  
 
        #add user to sudoers file  
        echo "${ADMIN}    ALL=(ALL)       ALL" >> /etc/sudoers 
    fi 
done 
 
 
#init done,and reboot system  
echo -e "Do you want to \e[0;31m\033[1mreboot\e[m system now? [Y/N]:\t " 
read REPLY 
case $REPLY in  
    Y|y) 
        echo "The system will reboot now ..." 
        shutdown -r now  
        ;; 
    N|n) 
        echo "You must reboot later..." 
        source /etc/profile  
        ;; 
    *) 
        echo "You must input [Y/N]." 
        source /etc/profile  
        ;; 
esac 