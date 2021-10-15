FROM node:12-alpine

COPY 	./package* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install

COPY 	. /usr/src/app 

WORKDIR /usr/src/app
RUN	npm install

EXPOSE	3000
CMD node index.js
