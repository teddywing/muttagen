all: build/muttagen.user.js

build/%.js: src/%.ts
	tsc

build/muttagen.user.js: build/index.js
	browserify $^ -o $@
