# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY . .

# Expose the desired port (replace 3000 with your application's port if different)
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]