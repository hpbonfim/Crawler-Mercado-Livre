FROM node:12-slim

WORKDIR /backend

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD [ "npm", "start" ]