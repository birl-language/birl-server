FROM node:alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]