FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN ionic build web

COPY . .

EXPOSE 3000

ENV PORT 3000

CMD [ "node", "server.js" ]