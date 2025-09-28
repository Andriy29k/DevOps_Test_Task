#!/bin/sh
echo "admin:$(openssl passwd -apr1 ${BASIC_AUTH_PASSWORD:-admin})" > /etc/nginx/htpasswd
nginx -g 'daemon off;'
