FROM nginx:alpine

RUN apk add --no-cache apache2-utils openssl bash

COPY conf.d/dev.conf /etc/nginx/conf.d/default.conf

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
