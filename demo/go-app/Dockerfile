FROM golang:alpine as builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 cd demo/go-app && go build ./.
EXPOSE 8080
ENTRYPOINT ["/app/demo/go-app/go-app"]
