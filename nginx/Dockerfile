FROM nginx:alpine

RUN apk add --no-cache apache2-utils openssl bash

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
