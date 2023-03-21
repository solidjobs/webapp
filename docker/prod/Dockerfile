FROM node:14-bullseye AS node_build
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli@8.3.3
COPY . /app
RUN ng build --prod
COPY htaccess/_pro dist/.htaccess
COPY dialogflow dist/dialogflow
RUN mkdir dist/api
COPY profile_image.php dist/api/index.php

FROM php:7.1 AS php_build
RUN apt-get update && apt-get install -y git
WORKDIR /app
COPY --from=node_build /app/dist/dialogflow /app/dist/dialogflow
WORKDIR /app/dist/dialogflow
RUN php composer.phar install

FROM nginx:latest
COPY --from=node_build /app/dist /usr/share/nginx/html
COPY --from=php_build /app/dist/dialogflow /usr/share/nginx/html/dialogflow
EXPOSE 8001
CMD ["nginx", "-g", "daemon off;"]
