FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /home/landinPage

COPY ["package-lock.json", "package.json", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
