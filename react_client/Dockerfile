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

# Exposing the port
EXPOSE 3000

# Starting the app
# Note that I am using npm start instead of production build options
# this was done because 1) it was easier 2) the course didn't demand anything more
CMD [ "npm", "start" ]