# create your own image
FROM node:10.17-alpine

RUN mkdir /app

WORKDIR /app

COPY ./src .
COPY ./package.json .
COPY ./settings.js .

RUN npm i