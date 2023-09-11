# Use the official Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
