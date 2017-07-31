#RabbitMQ
python模块pika支持RabbitMQ队列. 官网:
http://www.rabbitmq.com/tutorials/tutorial-one-python.html

运行RabbitMQ服务
RabbitMQ服务脚本自动安装到目录 `/usr/local/sbin` 下. 此目录不会自动加到环境变量, 所以需要把路径变量`PATH=$PATH:/usr/local/sbin`加载到终端的配置文件(zsh的配置文件是.zshrc)中, 然后就可以用`rabbitmq-server`命令启动RabbitMQ服务了.


