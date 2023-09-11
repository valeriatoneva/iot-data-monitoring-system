# Use the official Node.js 14 image from Docker Hub
FROM node:14

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm packages specified in package.json
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose port 3001 for the service to listen on
EXPOSE 3001

# Run the application
CMD ["node", "app.js"]
