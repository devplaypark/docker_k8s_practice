FROM ubuntu:20.04

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs npm

COPY 	. /usr/src/app 

WORKDIR /usr/src/app
RUN	npm install

EXPOSE	3000
CMD node index.js
