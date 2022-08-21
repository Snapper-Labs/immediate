FROM golang:alpine as builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build ./web/examples/all_apps/
FROM scratch
WORKDIR /app
COPY --from=builder /app/all_apps /usr/bin/
ENTRYPOINT ["all_apps"]
