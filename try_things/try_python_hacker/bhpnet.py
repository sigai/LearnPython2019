#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
import sys
import getopt
import socket
import threading
import subprocess
from time import sleep
from colorama import init, Fore


#TODO: finish server_loop

def usage():
	print("BHP Net Toll\n")
	print("Usage: bhpnet.py -t target_host -p port")
	print("-l --listen                 - listen on [host]:[port] for incoming conections")
	print("-e --execute=file_to_run    - execute the given file upon receiving a connection")
	print("-c --command                - initialize a command shell")
	print("-u --upload=destination     - upon receiving connection upload a file and write to [destination]\n\n")
	print("Examples: ")
	print("bhhpnet.py -t 192.168.0.1 -p 5555 -l -c")
	print("bhhpnet.py -t 192.168.0.1 -p 5555 -l -u=c:\\target.exe")
	print("bhhpnet.py -t 192.168.0.1 -p 5555 -l -e='cat /etc/passwd'")
	print("echo 'ABCDEFGHI' | ./bhpnet.py -t 192.168.0.1 -p 135")
	sys.exit()

def client_sender(target: str, port: int, buffer: bytes):
	client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	try:
		client.connect((target, port))
		if len(buffer):
			client.send(buffer)
		
		while True:
			recv_len = 1
			response = ""
			
			while recv_len:
				data = client.recv(4096)
				recv_len = len(data)
				response += str(data, encoding="utf-8")
				if recv_len < 4096:
					break
			print(Fore.WHITE + response, end="")
			buffer = bytes(input(""), encoding="utf-8")
			buffer += b"\n"
			client.send(buffer)
	except Exception as e:
		print("[*] Exception!, Exiting.", e)
		client.close()

def server_loop(target, port, upload, upload_destination, execute, command):
	if not len(target):
		target = "0.0.0.0"
	
	server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
	server.bind((target, port))
	server.listen(5)
	print("[*] Server up!")
	
	while True:
		client_socket, addr = server.accept()
		print(f"[*] Client come in: {addr[0]}:{addr[1]}")
		client_thread = threading.Thread(target=client_handler,
										args=(client_socket, upload, upload_destination, execute, command))
		client_thread.start()

def run_command(command:str) ->bytes:
	command = command.strip()
	try:
		output = subprocess.check_output(command, stderr=subprocess.STDOUT, shell=True)
	except:
		output = b"Failed to execute command.\n"
	
	return output

def client_handler(client_socket, upload, upload_destination, execute, command):
	if len(upload_destination):
		file_buffer = ""
		
		while True:
			data = client_socket.recv(1024)
			if not data:
				break
			else:
				file_buffer += data
				
		try:
			with open(upload_destination, "wb") as f:
				f.write(file_buffer)
			client_socket.send(bytes(f"Successfully saved file to {upload_destination}", encode="utf-8"))
		except:
			client_socket.send(bytes(f"Failed to save file to {upload_destination}", encode="utf-8"))
	
	if len(execute):
		output = run_command(execute)
		client_socket.send(output)
	if command:
		while True:
			client_socket.send(b"<BHP:#> ")
			cmd_buffer = ""
			while "\n" not in cmd_buffer:
				cmd_buffer += str(client_socket.recv(1024), encoding="utf-8")
				response = run_command(cmd_buffer)
				print(response)
				client_socket.send(response)
	
def main():
	init()
	listen = False
	command = False
	upload = False
	execute = ""
	target = ""
	upload_destination = ""
	port = 0
	
	if not len(sys.argv[1:]):
		usage()
	try:
		opts, args = getopt.getopt(sys.argv[1:], "hle:t:p:cu:",
		["help", "listen", "execute", "target", "port", "command", "upload"])
	except getopt.GetoptError as err:
		print(err)
		usage()
	for o, a in opts:
		if o in ("-h", "--help"):
			usage()
		elif o in ("-l", "--listen"):
			listen = True
		elif o in ("-e", "--execute"):
			execute = a
		elif o in ("-c", "--commandshell"):
			command = True
		elif o in ("-u", "--upload"):
			upload_destination = a
		elif o in ("-t", "--target"):
			target = a
		elif o in ("-p", "--port"):
			port = int(a)
		else:
			assert False, "Unhandled Option"
			
	if not listen and len(target) and port > 0:
		buffer = sys.stdin.read()
		client_sender(target, port, buffer)
	if listen:
		server_loop(target, port, upload, upload_destination, execute, command)

if __name__ == "__main__":
	main()