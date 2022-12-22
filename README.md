# ⛩ Zen-Federation ⛩

#### NestJS + Prisma + Apollo Federation 2 Microservices Starter Kit

---

**This repository is a standalone fork of https://github.com/ZenSoftware/zen.**

**Why this is a standalone fork **: 
I removed all frontend aspects of the original code. Rather than implementing a full-stack starter kit in a single monorepo, for my purposes I wanted separation of concerns between the backend and frontend as well as separate the entire stack into three layers. This repository is the data model layer of the software architecture that I envision. Further details about the architecture and changes that I made from the original repository are below. 

Continuing the vision of the original Zen repository, this repository treats `schema.prisma` as a *single source of truth* for data models. From this single file, this project generates all the code necessary to start a GraphQL server in seconds by inputting just a few commands. The difference between the old repository and my fork is that not only can you generate CRUD for models declared in the `schema.prisma` file, you can generate an entire new backend service in seconds, which comes with its own Prisma client and `schema.prisma`, fully supporting an Apollo Federation 2 supergraph out of the box. 

Major changes and additions from the original Zen repository : 

- Nx workspace generator that generates an entire new service / apollo subgraph from scratch, which comes with its own Prisma Client and `schema.prisma` file. 

- Docker-compose which works out of the box with no modifications needed, with optimized multi-stage build Dockerfile to minimize container image size. The Nx workspace generator even generates the docker-compose file and modifies it when you generate a new backend service; you can specify the ports or the ports will be automatically assigned for you. The docker compose sets up a fully working environment Apollo Router, PGAdmin, PostgreSQL, and the subgraphs.

- PGAdmin that automatically connects to each service's PostgreSQL server; the Nx workspace generator automatically generates files for PGAdmin that connect to new databases automatically

- A separate fork of the Paljs/Generator library to generate gql schemas and endpoints to make it work with Apollo 2 Federation. Details about my modifications are below and you can find my fork here : https://github.com/johnkm516/prisma-tools-federation

Things I deleted from the original Zen repository : 

- GraphQL upload related code : I agree with [Apollo's recommendations](https://www.apollographql.com/blog/backend/file-uploads/file-upload-best-practices/ "Apollo's recommendations") that file uploads shouldn't be handled with GraphQL. Trying to implement multi-part file uploading in a federated architecture using Apollo Router not only might not be possible at the moment, it's outside the scope of this service layer. Refer to my intended architecture below. 

- Frontend related code. As mentioned above this monorepo serves as a data model layer for a greater architecture. Removing the frontend code also gives you the freedom to implement the stack however you want, not just in the way I envision. 

## 🏰 The Architecture 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/architecture.png?raw=true)

The architecture I envision are separated into three layers : 

1.  The data model layer ([Zen-Federation](https://github.com/johnkm516/zen-federation "Zen-Federation") YOU ARE HERE)
2. The business logic layer ([Zen-Temporal](https://github.com/johnkm516/zen-temporal "Zen-Temporal"))
3. Frontend layer (In whichever framework you choose, create a web app that uses Apollo Client and Temporal Client libraries to connect to layers 1 & 2)

My rationale behind this architecture : 

- GraphQL endpoints can become incredibly verbose and tedious to implement. I wanted to be able to automate generating all the CRUD endpoints for models defined in `schema.prisma` each subgraph, and generate new subgraphs with ease. 

- Any simple "one-off" queries and mutations can be called directly by frontend applications via Apollo Client. This project generates and supports GraphQL resolvers with `where` inputs, which you can use to implement *Optimistic Concurrency Control* in cases where it's assumed multiple users modifying the data simultaneously is rare. 

- In cases where you need to implement business logic, [Temporal IO](https://temporal.io/ "Temporal IO") is a workflow engine that is great for microservice orchestration. Temporal UI displays the input / output JSON data of all your activities for every workflow execution - every call to your GraphQL endpoint, external API calls, business logic activities, etc. - which can make debugging distributed systems significantly easier. [Temporal IO](https://temporal.io/ "Temporal IO") is the brain of this entire architecture. Anytime any logic needs to be coded outside of simple CRUD or rendering frontend, it should be implemented as a Temporal workflow / activity in a worker. The *[saga pattern](https://learn.temporal.io/tutorials/php/booking_saga/ "saga pattern")* is supported and comes built-in by Temporal as well; although currently Zen-Federation does not automatically generate compensating resolvers or save event IDs for mutations. You will have to implement this functionality yourself. 

- Because [Temporal IO](https://temporal.io/ "Temporal IO") saves every input/output of your activities, you can take advantage of all this raw data to create ETL workflows for business intelligence, all of it horizontally scalable. 

---

## 🍣 Project Setup Instructions - [GitHub Repo](https://github.com/ZenSoftware/Zen)

**Requirements**

- [Node v16](https://nodejs.org/)
- [Docker](https://www.docker.com/) or [Rancher Desktop](https://rancherdesktop.io/)

```bash
# Project setup steps
git clone https://github.com/ZenSoftware/zen.git --depth=1
cd zen
cp .env.example .env
npm i
docker-compose up -d
npm run prisma:migrate
```

```bash
# Start the Nest API
npm run start:api

# Start the Angular site at localhost:4200
npm start
```

```bash
# Reload Apollo VSCode extension via command palette
>Apollo: Reload schema
```

---

## 🥢 GraphQL Features

- [x] [Nest GraphQL](https://docs.nestjs.com/graphql/resolvers) resolvers as a gateway to [Prisma Client](https://www.prisma.io).
- [x] [Apollo GraphQL SDL bindings to Prisma](https://paljs.com/generator/sdl) generated via [Pal.js CLI](https://paljs.com/cli/generator)! Thank you [**@AhmedElywa**](https://github.com/paljs) 🎎
- [x] [PrismaSelect](https://paljs.com/plugins/select/) to solve the GraphQL N+1 problem for all queries for free.
- [x] Custom npm scripts to code generate the Nest GraphQL gateway on Prisma schema changes.
- [x] [Code generation](https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular) of [apollo-angular](https://www.apollographql.com/docs/angular/) services to enable simple, type safe access to the GraphQL API within Angular. 🎀 Modern dev tooling configured for the project, allowing for [Apollo extension for VS Code](https://www.apollographql.com/docs/devtools/editor-plugins/) to provide auto-completion within `gql` tags for all `.ts` files.
- [x] An Angular `GraphQLModule` to simplify the configuration of the `ApolloClient` to enable/disable the varying `ApolloLink` features.
  - [x] [HttpBatchLink](https://apollo-angular.com/docs/data/network#httpclient-1) for batching several GraphQL requests that occur within a short debounce interval. This really helps to alleviate network congestion.
  - [x] [UploadLink](https://www.npmjs.com/package/apollo-upload-client) to give `ApolloClient` HTTP multi-part form requests capabilities. Enabling the uploading of files via [GraphQLUpload](https://github.com/jaydenseric/graphql-upload).
  - [x] [GraphQLWsLink](https://www.apollographql.com/docs/react/data/subscriptions/#2-initialize-a-graphqlwslink) for GraphQL subscriptions over websockets.

---

## 🍱 API Authentication, Performance & Scaling

- [x] [Nest authentication](https://docs.nestjs.com/techniques/authentication), user registration, and login system designed specifically to work for an [Angular SPA (single page application)](https://angular.io/). This project provides responsive, "mobile first" interfaces for the standard set of authentication features.
- [x] `New account component`
- [x] `Login component` with remember me option.
- [x] `Sign in with Google` via OpenID Connect.
- [x] `Forgot password component` and full password reset flow.
- [x] `Password change component` for user dashboards.
- [x] [Nest guards & directives](https://github.com/ZenSoftware/zen/blob/base/apps/auth-api/src/app/auth) for both RBAC & ABAC authorization schemes.  ABAC is the default authorization scheme and is implemented with [@casl/prisma](https://casl.js.org/v6/en/package/casl-prisma) & [@casl/angular](https://casl.js.org/v6/en/package/casl-angular).  The user's Casl rules are sent from the server to the client and updates the `@casl/angular` ability.  This unifies the permissions across both the server and the client, fully exploiting Casl's isomorphic capabilities.
- [x] `Angular route guards` and `Angular directives` to show/hide content depending on the user's roles or Casl abilities.

---

## 🍵 Modern Web Components and Responsive UIs

- [x] SASS chosen as the CSS transpiler of choice.
- [x] [Angular Material](https://material.angular.io/) components & theme.
- [x] Mobile first approach to build the framework's core components (login form, etc).
- [x] Directly import [Bootstrap reset, utilities, & grid](https://www.amadousall.com/the-good-parts-of-bootstrap-4-you-are-missing-in-your-angular-material-projects/) features through SCSS imports, and exclude the Bootstrap theme and conflicting component styles. These features are missing from Angular Material, and greatly simplify the creation of responsive, mobile first applications.
- [x] [Bootswatch](https://bootswatch.com/) SCSS variables integrated for a large assortment of high quality color themes to choose from.

---

### 🎏 Optional Tech Integrations

- [x] [Electron](https://www.electronjs.org/) branch with new npm script `npm run start:electron` to launch the app within Electron.
- [ ] [Capacitor](https://capacitorjs.com/) branch - planned
- [x] [SocketIO](https://socket.io/) branch demonstrates how to implement a Nest WebSocket Gateway with user authentication.
- [x] [Kendo UI](https://www.telerik.com/kendo-angular-ui/components/grid/) branch - which includes [@zen/grid](https://github.com/ZenSoftware/zen/tree/kendo/libs/grid).  `<zen-grid>` renders robust and reliable data grids over all of the Prisma models within the project, with minimal configuration needed.
- [x] [OpenTelemetry](https://opentelemetry.io/) branch demonstrates how to integrate and expose telemetry data for the API server.

---

## 🍡 Developer Operations

- [x] [Nx for project management](https://nx.dev/angular) to allow for the use of [Nx Console extensions for VSCode](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console). Nx Console is a GUI interface for monorepos that adds a lot of modern developer conveniences. It also helps to simplify the use of the various Angular & Nest code generation schematics available in the ecosystem.
- [x] Strict typings with Typescript for everything. Even the code generation tools are written in Typescript.
- [x] [Angular Language Service for VSCode](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) for modern IDE tooling.
- [x] NPM scripts for versioned releases of the Nest **api** server as a containerized Docker image. [node:18-alpine](https://hub.docker.com/_/node?tab=description&ref=hackernoon.com) is used as the Docker container base image, and the appropriate `tsconfig.app.json` configurations are being applied for the Nest app.
- [x] Example [Kubernetes](https://kubernetes.io/) deployment scripts.
- [x] Enforced code formatting via [Prettier](https://prettier.io/) & [import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort), guaranteeing all contributions to the project are standardized with predictable structure, and clear legibility.
- [x] [Commitizen](https://github.com/commitizen/cz-cli) for standardizing git commits.
- [x] [@nestjs-modules/mailer](https://github.com/nest-modules/mailer) for automated emailing, and pre-configured [Handlebars e-mail templates](https://handlebarsjs.com/guide/#what-is-handlebars) for the various web portal's emailing needs. Handlebars has similar double bracket `{{contextField}}` template interpolation, akin to Angular templates. Custom HTML e-mail triggers within Nest are made very simple by simply passing a `JSON context` and the template's `file name` as parameters to the class injectable `MailService`.
- [x] [Compodoc](https://compodoc.app/) to generate Nest & Angular documentation.
