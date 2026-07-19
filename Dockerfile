FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY server.mjs ./
COPY lib ./lib
COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV PORT=80
ENV THREADS_DATA_DIR=/data

RUN mkdir -p /data

EXPOSE 80

CMD ["node", "server.mjs"]
