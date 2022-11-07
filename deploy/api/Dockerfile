#------------------------------------------------------------------------------------------------#
#Stage 1 : Node cache so that npm install isn't executed multiple times for each API image build
FROM node:18-alpine as node_cache

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENVS

WORKDIR /cache/

COPY dist/package-deploy.json ./package.json
# COPY local npm packages
COPY libs/paljs-generator-5.0.1.tgz ./libs/paljs-generator-5.0.1.tgz
COPY libs/paljs-types-5.0.1.tgz ./libs/paljs-types-5.0.1.tgz
# Uncomment below if you're using .npmrc
# COPY .npmrc .
RUN npm i --no-audit

#------------------------------------------------------------------------------------------------#
#Stage 2 : Build API image, COPY package.json, package-lock.json, and /node-modules from Stage 1
FROM node:18-alpine as build

ARG PRISMA_CLIENT_PATH

WORKDIR /usr/src/api

# COPY cached files from Stage 1
COPY --from=node_cache /cache/ ./
# COPY app dists
COPY ./apps/auth-api ./apps/auth-api
COPY ./libs ./libs
WORKDIR /usr/
COPY ./tsconfig.base.json ./tsconfig.base.json
WORKDIR /usr/src/api
# COPY Prisma Client, create index.js that exports a single prisma client for this API
COPY ./libs/prisma-clients/Auth/ ./libs/prisma-clients/Auth/
RUN echo "export { AuthPrismaClient } from './Auth';" > ./libs/prisma-clients/index.ts
RUN npx prisma generate --schema=./libs/prisma-clients/Auth/prisma/schema.prisma
RUN cp -r ./node_modules/.prisma ./
RUN npm install -g @vercel/ncc && cp -r ./.prisma ./node_modules/.prisma && ncc build apps/auth-api/src/main.ts -o dist && rm -rf node_modules
#RUN rm -r -f ./node_modules
#RUN mv ./.prisma /usr/src/api/node_modules/

#------------------------------------------------------------------------------------------------#
#Stage 3 : Final image
FROM node:18-alpine as final

ARG API_PORT

WORKDIR /usr/src/api
COPY --from=build /usr/src/api .
EXPOSE $API_PORT
# but not its node_modules tree or anything else
CMD ["node", "main.js"]
