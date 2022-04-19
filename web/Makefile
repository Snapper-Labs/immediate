node_modules:
	yarn install

typecheck: node_modules
	yarn tsc --noEmit

build/main.js: node_modules *.ts
	yarn esbuild --bundle main.ts --outdir=build

.PHONY: typecheck
