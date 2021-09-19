FROM ubuntu:20.10

RUN apt-get update

RUN apt-get install nginx -y

COPY index.html /var/www/html/
COPY index.js /var/www/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]