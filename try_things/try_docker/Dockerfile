FROM python:latest
MAINTAINER sigai vipfts@qq.com
ENV PATH /usr/local/bin:$PATH
ADD . /code
WORKDIR /code
RUN pip install pipenv
RUN pipenv install
RUN echo "python is great"
CMD python progressbar.py