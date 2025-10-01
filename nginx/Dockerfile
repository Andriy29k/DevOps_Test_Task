FROM nginx:alpine

RUN <<EOF
    apk add --no-cache apache2-utils openssl bash
    shtpasswd -c /etc/nginx/.htpasswd andriy29k
    echo 12345
EOF
