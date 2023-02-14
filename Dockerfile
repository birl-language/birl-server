FROM node:alpine
RUN apk add --update build-base nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]