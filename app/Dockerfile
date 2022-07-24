FROM node:12-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY . .

CMD ["npm","run","start"]