FROM node:latest

WORKDIR /code
ENTRYPOINT node node_modules/react-scripts/bin/react-scripts.js start

COPY package.json package-lock.json /code/
RUN npm install

COPY ./ /code/

EXPOSE 3000
