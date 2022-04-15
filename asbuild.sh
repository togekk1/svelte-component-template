#!/bin/bash

ls src/assembly/i18n/ts | parallel --halt-on-error now,fail=1 asc src/assembly/i18n/ts/{} --target release -o public/build/{.}.optimized.wasm &&\
ls src/assembly/dev | parallel --halt-on-error now,fail=1 asc src/assembly/dev/{} --target release -o public/build/{.}.optimized.wasm &&\

rm -f public/build/*.untouched.* &&\
rm -f public/build/false &&\
yarn asbuild:post &&\
echo done