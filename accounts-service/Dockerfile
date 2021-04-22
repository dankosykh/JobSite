
#FROM arm64v8/node:lts-alpine
#FROM node:lts-alpine
#RUN apk add --no-cache build-base
FROM arm64v8/node:lts-buster

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

CMD ["node","-r", "esm", "server.js"]
