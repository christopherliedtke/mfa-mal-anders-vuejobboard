FROM node:12

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN cd ./client && npm install

# RUN cd ./client && npm build

ENV PORT=5001

EXPOSE 5001

CMD [ "npm", "start" ]