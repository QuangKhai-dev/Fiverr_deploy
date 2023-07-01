# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Use a minimal lightweight Node.js image as the final base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose the desired port (replace 3000 with your application's port if different)
EXPOSE 3000

# Start the NestJS application
CMD ["node", "./dist/main"]
