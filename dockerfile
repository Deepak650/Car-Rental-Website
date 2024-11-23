# Use an official Nginx image from the Docker Hub
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the current directory (project files) to the container
COPY . .

# Expose port 80 to make the app accessible from outside the container
EXPOSE 80

# Default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]