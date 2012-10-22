MINIFY = ./node_modules/.bin/uglifyjs

build: basic all

basic:
	node build.js --basic --out ./bundles/basic.js
	$(MINIFY) ./bundles/basic.js > ./bundles/basic.min.js

all:
	node build.js --out ./bundles/all.js
	$(MINIFY) ./bundles/all.js > ./bundles/all.min.js
	cp ./bundles/all.min.js ./ie-sucks.min.js
	cp ./bundles/all.js ./ie-sucks.js
