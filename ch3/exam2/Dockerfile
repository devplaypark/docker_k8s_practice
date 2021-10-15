FROM golang:latest

COPY 	. /go/src/app

WORKDIR	/go/src/app

RUN 	go mod tidy
RUN	go install -v ./...

EXPOSE	8080

CMD	ping
