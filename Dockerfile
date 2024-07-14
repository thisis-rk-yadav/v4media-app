FROM node:21-alpine3.18 as BUILD_IMAGE
WORKDIR /app/react-app

#copy package.json
COPY package.json .

#install all our packages
RUN npm install

#copy all our remaining files
COPY . .

#finally build our project
RUN npm run build

#implementing the multi-stage build. It greatly reduces our size and won't expose code in our container as we will only copy the build output from the first stage

#beginning of second stage
FROM node:21-alpine3.18 as PRODUCTION_IMAGE
WORKDIR /app/react-app

#copying /app/react-app/dist folder from BUILD_IMAGE to /app/react-app/dist in this stage
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080
#to run npm commands, we need package.json
COPY package.json .
COPY vite.config.js .
RUN npm install
CMD [ "npm","run", "preview" ]