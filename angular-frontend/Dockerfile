# Use an Nginx image to serve Angular static files
FROM nginx:alpine
COPY ./dist/angular-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]