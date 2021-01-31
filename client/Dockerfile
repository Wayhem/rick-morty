FROM node:14.15.4

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]