FROM node:14-bullseye

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install -g @angular/cli@8.3.3

COPY . /app

EXPOSE 4200

CMD [ "npm", "start" ]
