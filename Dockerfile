FROM node:alpine
WORKDIR /usr/src/app
EXPOSE 3000
copy package*.json ./
RUN npm install
copy . .
CMD ["npm", "start"]
