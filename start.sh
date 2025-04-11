#!/usr/bin/env sh

docker build -t ekyc-html-example .
docker run -it --rm -p 8080:80 ekyc-html-example
