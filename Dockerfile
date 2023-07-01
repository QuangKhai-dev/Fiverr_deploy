# Base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./


# Install app dependencies
RUN yarn install


# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 8080

# Start the server using the production build
CMD [ "npm", "run", "start:prod"]