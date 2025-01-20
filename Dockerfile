ARG NODE_VERSION=22.11.0

FROM node:$NODE_VERSION

RUN npm install -g pnpm

WORKDIR /app

COPY . . 

RUN pnpm i
RUN pnpm b build
RUN pnpm w build

EXPOSE 3000
CMD [ "pnpm", "b", "start" ]