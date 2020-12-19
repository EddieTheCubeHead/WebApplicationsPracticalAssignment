# Million node images for docker. The only rational explanation for
# using this particular one is that the resources I used to construct
# the dockerfiles used this
FROM node:lts-slim

# Creating a working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Managing npm
COPY package*.json /usr/src/app/
RUN npm install

# Copying the rest
COPY . /usr/src/app/

# Starting the app
CMD [ "npm", "start" ]