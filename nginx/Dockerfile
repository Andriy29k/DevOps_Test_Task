FROM nginx:alpine

ARG AUTH_ENTRY 

RUN apk add --no-cache apache2-utils

RUN if [ -z "$AUTH_ENTRY" ]; then \
        echo "AUTH_ENTRY bot set" && exit 1; \
    fi && \
    echo "$AUTH_ENTRY" > /etc/nginx/.htpasswd && \
    chmod 644 /etc/nginx/.htpasswd