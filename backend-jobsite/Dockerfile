#FROM arm64v8/node:lts-buster
FROM node:lts-buster

WORKDIR /app
COPY . .

ENV PORT 5000
EXPOSE 5000

RUN yarn install --frozen-lockfile

CMD ["node", "server/server.js"]