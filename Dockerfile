FROM node:argon

# Create app directory
RUN mkdir -p /mysite/app
WORKDIR /mysite/app

# Install app dependencies
COPY package.json /mysite/app
RUN npm install

# Bundle app source
COPY . /mysite/app
COPY ./config /mysite/app/config
COPY ./credentials /mysite/app/credentials

RUN chown -R node:node /mysite

USER node
ENV HOME /mysite/app

EXPOSE 8100

CMD [ "npm", "start" ]

