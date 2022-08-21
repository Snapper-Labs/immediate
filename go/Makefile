build-examples-docker:
	docker build -t immediate/examples -f web/examples/all_apps/Dockerfile .

run-examples-docker:
	docker run --rm -p 8081:8081 --name immediate_examples -d immediate/examples 

stop-examples-docker:
	docker stop immediate_examples

ngrok:
	ngrok http 8081

web/main.js:
	cd ../web && make build/main.js && cp build/main.js ../go/web/main.js

.PHONY: web/main.js
