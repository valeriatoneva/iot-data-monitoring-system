# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Install and cache app dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Use Nginx for serving
FROM nginx:alpine

# Copy build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
