# Base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock ./

# Install app dependencies
RUN yarn install


# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn run build

EXPOSE 8080

# Start the server using the production build
CMD [ "npm", "run", "start:prod"]