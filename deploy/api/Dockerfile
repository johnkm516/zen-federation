###Personal notes : Tried bundling the entire API to reduce image size. 
#                   However tree-shaking and bundling only the required dependencies is basically impossible when the project is large (such as this monorepo) and therefore not recommended,
#                   As per this Github issue : https://github.com/nestjs/nest/issues/1706#issuecomment-579248915
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
COPY libs/paljs-plugins-5.0.1.tgz ./libs/paljs-plugins-5.0.1.tgz
COPY libs/paljs-schema-5.0.1.tgz ./libs/paljs-schema-5.0.1.tgz
RUN npm install -g pnpm
# Uncomment below if you're using .npmrc
# COPY .npmrc .
RUN pnpm install --no-lockfile --ignore-scripts --production

#------------------------------------------------------------------------------------------------#
#Stage 2 : Build API image, COPY package.json, package-lock.json, and /node-modules from Stage 1
FROM node:18-alpine as build

ARG API_NAME
ARG PROJECT_NAME

WORKDIR /usr/src/api

# COPY cached files from Stage 1
COPY --from=node_cache /cache/ ./
# COPY app dists
COPY dist/apps/$PROJECT_NAME ./
# COPY Prisma Client, create index.js that exports a single prisma client for this API
COPY ./libs/prisma-clients/$API_NAME/ ./libs/prisma-clients/$API_NAME/
RUN echo "export { ${API_NAME}PrismaClient } from './$API_NAME';" > ./libs/prisma-clients/index.ts
RUN npx prisma generate --schema=./libs/prisma-clients/$API_NAME/prisma/schema.prisma
RUN cp -r ./node_modules/.prisma ./

#------------------------------------------------------------------------------------------------#
#Stage 3 : Final image
FROM node:18-alpine as final

ARG API_PORT

WORKDIR /usr/src/api
COPY --from=build /usr/src/api .
EXPOSE $API_PORT
# but not its node_modules tree or anything else
CMD ["node", "main.js"]
