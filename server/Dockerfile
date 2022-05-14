FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV NODE_ENV production

RUN npm run build

CMD ["npm", "run", "dev"]
