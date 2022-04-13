#!/bin/bash

ls src/assembly/i18n/ts | parallel --halt-on-error now,fail=1 asc src/assembly/i18n/ts/{} --target debug -o public/build/{.}.optimized.wasm &&\

rm -f public/build/*.untouched.* &&\
yarn asbuild:post &&\
echo done