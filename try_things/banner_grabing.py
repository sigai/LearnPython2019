#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"

import socket  
import sys  
import os  
#grab the banner  
def grab_banner(ip_address,port):  
        try:  
                s=socket.socket()  
                s.connect((ip_address,port))  
                banner = s.recv(1024)  
                print ip_address + ':' + banner  
        except:  
                return  
def checkVulns(banner):  
        if len(sys.argv) >=2:  
                filename = sys.argv[1]  
                for line in filename.readlines():  
                            line = line.strip('\n')  
                            if banner in line:  
                                    print "%s is vulnerable" %banner  
                            else:  
                                    print "%s is not vulnerable"  
def main():  
        portList = [21,22,25,80,110]  
        for x in range(0,255):  
                for port in portList:  
                            ip_address = '192.168.0.' + str(x)  
                            grab_banner(ip_address,port)  
if __name__ == '__main__':  
        main()  