ls src/assembly/i18n/ts | parallel --halt-on-error now,fail=1 asc src/assembly/i18n/ts/{} --target debug -o public/build/{.}.untouched.wasm &&\

rm -f public/build/*.optimized.* &&\
yarn asbuild:post &&\
echo done