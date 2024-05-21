FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "dist", "-p", "8080"]