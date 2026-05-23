# Build BASE
FROM node:lts-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:lts-alpine AS build

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN apk add --no-cache git curl \
    && yarn build \
    && cd .next/standalone \
    && node-prune

# Build production
FROM node:lts-alpine AS prod

WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
