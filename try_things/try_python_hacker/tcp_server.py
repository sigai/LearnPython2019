#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__author__ = "sigai"
import socket
import threading


def handle_client(client_socket):
	request = client_socket.recv(1024)
	print(f"[*] Received: {str(request, encoding='utf-8')}")
	client_socket.send(b"ACK!")
	client_socket.close()
	
if __name__ == "__main__":
	ip = "0.0.0.0"
	port = 12345

	server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	server.bind((ip, port))
	server.listen(5)
	print(f"[*] Listening on {ip}:{port}")

	while True:
		client, addr = server.accept()
		print(f"[*] Accepted connection from {addr[0]}:{addr[1]}")
		
		client_handler = threading.Thread(target=handle_client, args=(client,))
		client_handler.start()