build-docker:
	docker build -t gcr.io/snapper-326913/immediate_demo:latest -f Dockerfile ../..

push-docker:
	 docker push gcr.io/snapper-326913/immediate_demo:latest

run-docker:
	docker run --rm -p 8081:8081 --name immediate_demo gcr.io/snapper-326913/immediate_demo:latest

stop-docker:
	docker stop immediate_demo

ngrok:
	ngrok http 8081
