# Use an official Node runtime as a parent image
FROM node:latest AS builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json .

# Install dependencies

RUN npm install
RUN npm install -g @angular/cli@latest

# Copy the current directory contents into the container at /app
COPY . .

EXPOSE 4200

CMD ["ng","serve","--host","0.0.0.0"]
