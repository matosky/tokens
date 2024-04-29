# Use an official Node runtime as a parent image
FROM node:latest AS builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the Angular app for production
RUN npm run build --prod
# Create the nginx stage for serving the content
FROM nginx:alpine
# Set the working directory to nginx assets directory
WORKDIR /usr/share/nginx/html
# Remove the default nginx static files
RUN rm -rf ./*

# Copy the built Angular app from the builder stage
COPY --from=builder /app/dist/cashtoken-frontend-v2/browser /usr/share/nginx/html

# Expose port 80 for external connections
EXPOSE 80
# Container run the nginx with global directive and Daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
