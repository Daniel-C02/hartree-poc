# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port Storybook will run on
EXPOSE 3000 6006

# Define the default command to start both Next.js and Storybook
CMD ["npm", "run", "dev:all"]

