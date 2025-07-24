FROM node:17-alpine
ARG PROJECT
RUN test -n "$PROJECT" || (echo "PROJECT not set" && false)
WORKDIR /app
COPY . .
WORKDIR /app/${PROJECT}
RUN yarn 
CMD ["/usr/local/bin/yarn", "start"]