# Use small Alpine Linux image
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . ./
RUN yarn run build

# FROM nginx:1.19-alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY /etc/nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
