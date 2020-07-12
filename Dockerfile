FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN ["npm", "--silent", "install"]
RUN ["npm", "--silent", "install", "serve", "-g"]

COPY . ./

RUN ["npm", "run", "build"]

EXPOSE 3000

CMD ["npm", "run", "serve"]