FROM node:19.1-alpine AS builder
ARG APP

RUN npm install -g pnpm
RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python
RUN pnpm i --frozen-lockfile
RUN pnpm build:$APP:prod

FROM node:19.1-alpine AS app
ARG APP
ARG ENV

RUN mkdir -p /app
WORKDIR /app

COPY --from=builder /app/config ./config
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENV APP_NAME $APP
ENV NODE_ENV $ENV
CMD node ./dist/apps/$APP_NAME/main.js
