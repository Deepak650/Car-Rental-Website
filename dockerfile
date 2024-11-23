# Use an official Nginx image from the Docker Hub
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files from the local machine to the container
# Assuming your project is in the same directory as the Dockerfile
COPY ./index.html ./style.css ./script.js ./

# Expose port 80 for the web server
EXPOSE 80

# The default command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
