FROM node:16.3.0-alpine3.13

COPY ./ /usr/src/
WORKDIR /usr/src/fundme/frontend/
RUN npm install 
RUN npm start
EXPOSE 3000