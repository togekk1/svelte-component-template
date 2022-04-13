for f in public/assets/web-worker/*.js
	do yarn dlx uglify-js $f -c -m -o $f
done
