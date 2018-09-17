FROM node:8.12

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY ./public ./public
COPY ./src ./src
COPY .eslintrc.js .
VOLUME [ "/app/build" ]
CMD npm run build