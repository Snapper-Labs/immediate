web/main.js:
	cd ../web && make build/main.js && cp build/main.js ../go/web/main.js

web/toolkit/bundle.js:
	cd ../toolkit && yarn install && yarn build && cp dist/bundle.js ../go/web/toolkit/bundle.js

clean:
	rm -rf ../web/node_modules yarn.lock
	rm -rf ../toolkit/node_modules yarn.lock

run-examples: bundle
	cd web/examples && go run ./.

bundle: web/main.js web/toolkit/bundle.js

.PHONY: web/main.js web/toolkit/bundle.js
