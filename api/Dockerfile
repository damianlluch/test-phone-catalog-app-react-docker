FROM node:8.12

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY .eslintrc.js .

COPY galaxy.json .
COPY index.js .
COPY iphone.json .
COPY phones.json .


EXPOSE 5000
CMD npm run serve