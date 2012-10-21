MINIFY = ./node_modules/.bin/uglifyjs

build: basic common all

basic:
	node build.js --basic --out ./bundles/basic.js
	$(MINIFY) ./bundles/basic.js > ./bundles/basic.min.js

common:
	node build.js --common --out ./bundles/common.js
	$(MINIFY) ./bundles/common.js > ./bundles/common.min.js

all:
	node build.js --out ./bundles/all.js
	$(MINIFY) ./bundles/all.js > ./bundles/all.min.js
	cp ./bundles/all.min.js ./ie-sucks.js
