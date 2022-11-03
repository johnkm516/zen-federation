#------------------------------------------------------------------------------------------------#
#Stage 1 : Node cache so that npm install isn't executed multiple times for each API image build
FROM node:18-alpine as node_cache
WORKDIR /cache/
COPY dist/package-deploy.json ./package.json
# COPY local npm packages
COPY libs/paljs-generator-5.0.1.tgz ./libs/paljs-generator-5.0.1.tgz
COPY libs/paljs-types-5.0.1.tgz ./libs/paljs-types-5.0.1.tgz
# Uncomment below if you're using .npmrc
# COPY .npmrc .
RUN npm i --omit=dev --force --loglevel warn
RUN npm prune
RUN echo | ls

#------------------------------------------------------------------------------------------------#
#Stage 2 : Build API image, COPY package.json, package-lock.json, and /node-modules from Stage 1
FROM node:18-alpine as final

ARG PRISMA_CLIENT_PATH
ARG API_PORT

WORKDIR /usr/src/api

# COPY cached files from Stage 1
COPY --from=node_cache /cache/ ./
# COPY app dist
COPY dist/apps/auth-api ./
# COPY Prisma Client, create index.js that exports a single prisma client for this API
COPY ./libs/prisma-clients/Auth/ ./libs/prisma-clients/Auth/
RUN echo "export { AuthPrismaClient } from './Auth';" > ./libs/prisma-clients/index.ts
RUN npx prisma generate --schema=./libs/prisma-clients/Auth/prisma/schema.prisma

# ENV DATABASE_URL=postgresql://user:pass@localhost:5432/database

EXPOSE $API_PORT

CMD [ "node", "main.js" ]