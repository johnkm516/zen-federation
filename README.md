# ⛩ Zen-Federation ⛩

#### NestJS + Prisma + Apollo Federation 2 Microservices Starter Kit

---

**This repository is a standalone fork of https://github.com/ZenSoftware/zen.**

**Check out the `test-model` branch for a sample schema that I am building for my full stack implementation!**

Table of contents
=================

<!--ts-->
   * [Introduction](#intro)
      * [Why this is a standalone fork](#intro_why)
	  * [Major changes and additions from the original Zen repository](#intro_changes)
   * [The Architecture](#architecture)
      * [Rationale](#rationale)
   * [Project Setup Instructions](#setup)
   * [Usage](#usage)
      * [Code Generation and Start API](#general_usage)
   * [GraphQL](#graphql)
	  * [Important Notes](#important_notes)
	  * [GraphQL Usage](#graphql_usage)
	  * [Transactional Batch Mutation](#graphql_transaction_usage)
   * [Project Tree](#tree)
   * [GraphQL Features](#features_graphql)
   * [API Authentication, Performance & Scaling](#features_scaling)

<!--te-->

<a name="intro"></a>
## ♟️ Introduction

<a name="intro_why"></a>
### **Why this is a standalone fork**: 

I removed all frontend aspects of the original code. Rather than implementing a full-stack starter kit in a single monorepo, for my purposes I wanted separation of concerns between the backend and frontend as well as separate the entire stack into three core layers. For an enterprise architecture, I expect multiple frontend applications, and as both the frontend and backend get bigger and more bloated with libraries, having everything in a single Nx monorepo with shared dependencies means the container image size will grow too large. This repository is the data model layer of the software architecture that I envision. Further details about the architecture and changes that I made from the original repository are below. 

Continuing the vision of the original Zen repository, this repository treats `schema.prisma` as a *single source of truth* for data models. From this single file (or in this case, a single *schema per service*), this project generates all the code necessary to start a GraphQL server in seconds by inputting just a few commands. The difference between the original repository and my fork is that not only can you generate CRUD for models declared in the `schema.prisma` file, you can generate an entire new backend service in seconds, which comes with its own Prisma client and `schema.prisma`, with a composable Apollo Federation 2 supergraph out of the box. 

<a name="intro_changes"></a>
### **Major changes and additions from the original Zen repository** : 

- Nx workspace generator that generates an entire new service / apollo subgraph from scratch, which comes with its own Prisma Client and `schema.prisma` file. 

- Docker-compose which works without any modifications needed, with optimized multi-stage build Dockerfile to minimize container image size. The Nx workspace generator even generates the docker-compose file and modifies it when you generate a new backend service; you can specify the ports or the ports will be automatically assigned for you. The docker compose sets up the entire environment with Apollo Router, PGAdmin, PostgreSQL, and the subgraphs.

- PGAdmin that automatically connects to each service's PostgreSQL server; the Nx workspace generator automatically generates files for PGAdmin that connect to new databases automatically

- A separate fork of the Paljs/Generator library to generate gql schemas and resolvers to make it work with Apollo 2 Federation. Details about my modifications are below and you can find my fork here : https://github.com/johnkm516/prisma-tools-federation

Things I deleted from the original Zen repository : 

- GraphQL upload related code : I agree with [Apollo's recommendations](https://www.apollographql.com/blog/backend/file-uploads/file-upload-best-practices/ "Apollo's recommendations") that multipart file uploads shouldn't be handled with GraphQL. Trying to implement multi-part file uploading in a federated architecture using Apollo Router not only might not be possible at the moment, it's outside the scope of this service layer. Refer to my intended architecture below. 

- Frontend related code. As mentioned above this monorepo serves as a data model layer for a greater architecture. Removing the frontend code also gives you the freedom to implement the stack however you want, not just in the way I envision. 

<a name="architecture"></a>
## 🏰 The Architecture 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/architecture.png?raw=true)

The architecture I envision are separated into three core layers : 

1.  The data model layer ([Zen-Federation](https://github.com/johnkm516/zen-federation "Zen-Federation") YOU ARE HERE)
2. The business logic layer ([Zen-Temporal](https://github.com/johnkm516/zen-temporal "Zen-Temporal"))
3. Frontend layer (In whichever framework you choose, create web app(s) that uses Apollo Client and Temporal Client libraries to connect to layers 1 & 2)

For external / other services. You can use Temporal workflows to communicate with external / other APIs, and create / use services like an ECM solution for file uploading and storage.

<a name="rationale"></a>
### **My rationale behind this architecture** : 

- GraphQL resolvers can become incredibly verbose and tedious to implement. I wanted to be able to automate generating all the CRUD resolvers for models defined in `schema.prisma` for each subgraph, and generate new subgraphs with ease.

- Any simple "one-off" queries and mutations can be called directly by frontend applications via Apollo Client. This project generates and supports GraphQL resolvers with `where` inputs, which you can use to implement *Optimistic Concurrency Control* in cases where it's assumed multiple users modifying the data simultaneously is rare. 

- In cases where you need to implement business logic, [Temporal](https://temporal.io/ "Temporal") is a workflow engine that is great for microservice orchestration. Temporal UI displays the input / output JSON data of all your activities for every workflow execution - every call to your GraphQL endpoint, external API calls, business logic activities, etc. - which can make debugging distributed systems significantly easier. [Temporal](https://temporal.io/ "Temporal") is the brain of this entire architecture. Anytime any logic needs to be coded outside of simple CRUD or rendering frontend, it should be implemented as a Temporal workflow / activity in a worker. Temporal's advantages include but are not limited to : 

	- The *[saga pattern](https://learn.temporal.io/tutorials/php/booking_saga/ "saga pattern")* is supported and comes built-in by Temporal; Temporal handles everything from retries and rolling back with compensating resolvers.  Although currently Zen-Federation does not automatically generate compensating resolvers or save event IDs for mutations. You will have to implement this functionality yourself. 

	- Because [Temporal](https://temporal.io/ "Temporal IO") saves every input/output of your activities, you can take advantage of all this raw data and create ETL workflows for business intelligence, all of it horizontally scalable via Temporal workers.

	- You can build Temporal workers in any programming language that currently has a supported Temporal SDK. This includes Typescript, Go, Java, Python, and PHP. You can even mix activities in multiple languages for a single workflow!

---
<a name="setup"></a>
## 🍣 Project Setup Instructions - [Zen-Federation](https://github.com/johnkm516/zen-federation "Zen-Federation")

**Requirements**

- [Node v16](https://nodejs.org/)
- [Docker](https://www.docker.com/) or [Rancher Desktop](https://rancherdesktop.io/)

```bash
# Project setup steps
git clone https://github.com/johnkm516/zen-federation.git
cd zen-federation
cp .env.example .env
npm i
npm run compose:up:dev
npm run prisma:migrate
```

```bash
# Start the Auth subgraph API
npm run start:auth
```
<a name="usage"></a>
## 🎴 Usage
**Recommended**

- [VSCode](https://code.visualstudio.com/ "VSCode") with Nx Console extension

<a name="general_usage"></a>
### **Code Generation and Start API**

- Generate a new backend subgraph service : 

	- apiPort and databasePort is optional. The script automatically finds and assigns unused ports for you if you don't want to set it yourself

Using VSCode NX Console extension : 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/NxConsole.png?raw=true)

Using bash : 
```bash
npx nx workspace-generator app-generator --apiPort=SERVICE_PORT --databasePort=POSTGRESQL_PORT --name=YOUR_SERVICE_NAME --provider=postgresql --no-interactive
```

Generate the Prisma Client for all subgraphs :

```bash
# This script is automatically modified when a new subgraph is generated using the Nx Workspace generator.
npm run api:gen
```

Start your subgraph API : 

```bash
npm run start:auth
# The Nx Workspace generator will generate this command
npm run start:YOUR_SERVICE_NAME_INLOWERCASE
# For example, for Products and Orders services : 
npm run start:products
npm run start:orders
```

Prisma migrate your subgraph API :
```bash
#Prisma migrate your auth service with your auth PostgreSQL db
npm run prisma:migrate:auth
#Similarly to above, the Nx Workspace generator will generate this command
npm run prisma:migrate:YOUR_SERVICE_NAME_INLOWERCASE
```

Build : 
```bash
# These scripts will automatically be modified by the Nx Workspace generator when a new service is added
npm run build:dev
npm run build:prod
```
---

<a name="graphql"></a>
## 🕸️ **GraphQL**
<a name="important_notes"></a>
### **Important Notes**
You will notice queries, mutations, and input types all have a prefix with the subgraph name. This is because as GraphQL is strongly typed, you cannot union input types nor does Apollo Federation 2 merge input types with the same name at the supergraph. Therefore all resolvers and input types have a prefix with the service name. However, output types do not have the service name prefix on their type, and therefore are composable into a single entity in the supergraph. Currently this respository automatically detects keys and candidate keys and sets them as Apollo Federation key-fields in the output types' gql type definitions. This is to make any models you declare in Prisma Schema compose to a supergraph out of the box. In the future I plan to add customizable generator options to opt out specific models from code-generation so you can customize the types and resolvers as you wish. 

<a name="graphql_usage"></a>
### **GraphQL Usage**

During development, I recommend using Apollo Sandbox. The purpose of this repository is to provide all the capabililties that you would expect from any relational database, such as groupBy, ```WHERE``` filters for every field, nested resolvers, etc. Using Apollo Sandbox, anyone, even without knowledge of SQL can build a query / mutation in seconds. 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/Sandbox.png?raw=true)

<a name="graphql_transaction_usage"></a>
### **Transactional Batch Mutation**

I added a new custom resolver for code-generation in PalJS/Generator that generates a mutation that can run any generated CRUD mutation in order, as a [Prisma Transaction](https://www.prisma.io/docs/concepts/components/prisma-client/transactions#the-transaction-api "Prisma Transaction").

This resolver accepts an array of ```#SUBGRAPH_NAME#__transactionalMutationInput```(**take note this input type takes one mutation only for each input in the array; otherwise the resolver will throw an error. When @oneOf directive is added to the spec this resolver will be updated to use that instead**), which contains input args of every CRUD mutation : 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/Sandbox_Transaction.png?raw=true)

As the resolver executes the mutations in the input list, if any one of them fails the transaction will fail and rollback. Prisma Client will ensure either all of the mutations succeed, or none of them succeed. 


---

<a name="tree"></a>
## 🌲 Project Tree

```bash
|-- README.md
|-- apollo-possible-types.yml
|-- apollo.config.js
|-- apps #Your subgraph APIs are generated here
|   `-- auth-api
|       |-- jest.config.ts
|       |-- pal.js
|       |-- project.json
|       |-- src
|       |   |-- app
|       |   |   |-- app.module.ts
|       |   |   |-- auth #The base Auth subgraph has auth related code that is not generated by other subgraphs. 
|       |   |   |   |-- README.md
|       |   |   |   |-- auth.controller.spec.ts
|       |   |   |   |-- auth.controller.ts
|       |   |   |   |-- auth.module.ts
|       |   |   |   |-- auth.service.ts
|       |   |   |   |-- casl
|       |   |   |   |   `-- ...
|       |   |   |   |-- decorators
|       |   |   |   |   `-- ...
|       |   |   |   |-- guards
|       |   |   |   |   `-- ...
|       |   |   |   |-- index.ts
|       |   |   |   |-- models
|       |   |   |   |   `-- ...
|       |   |   |   `-- strategies
|       |   |   |       `-- ...
|       |   |   |-- config
|       |   |   |   `-- ...
|       |   |   |-- controllers
|       |   |   |   `-- ...
|       |   |   |-- graphql #All GraphQL related code, such as input / output type definitions, gql schema, anad resolvers are here
|       |   |   |   |-- context.ts
|       |   |   |   |-- global-schema.gql.ts
|       |   |   |   |-- gql-config.service.ts
|       |   |   |   |-- index.ts
|       |   |   |   |-- models
|       |   |   |   |   `-- ...
|       |   |   |   |-- paljs
|       |   |   |   |   |-- Profile
|       |   |   |   |   |   |-- resolvers.ts
|       |   |   |   |   |   `-- typeDefs.ts
|       |   |   |   |   |-- User
|       |   |   |   |   |   |-- resolvers.ts
|       |   |   |   |   |   `-- typeDefs.ts
|       |   |   |   |   |-- model-names.ts
|       |   |   |   |   |-- resolvers.ts
|       |   |   |   |   |-- sdl-inputs.ts
|       |   |   |   |   `-- typeDefs.ts
|       |   |   |   |-- resolvers
|       |   |   |   |   |-- Auth.ts
|       |   |   |   |   |-- Profile.ts
|       |   |   |   |   |-- User.ts
|       |   |   |   |   `-- index.ts
|       |   |   |   |-- resolversTypes.ts
|       |   |   |   `-- zen-graphql.module.ts
|       |   |   |-- jwt
|       |   |   |   |-- index.ts
|       |   |   |   `-- jwt.module.ts
|       |   |   |-- mail
|       |   |   |   `-- ...
|       |   |   `-- prisma
|       |   |       |-- index.ts
|       |   |       |-- prisma-select-args.ts
|       |   |       |-- prisma.module.ts
|       |   |       `-- prisma.service.ts
|       |   |-- assets
|       |   |   `-- mail
|       |   |       |-- general.hbs
|       |   |       `-- password-reset.hbs
|       |   |-- environments
|       |   |   |-- environment.base.ts
|       |   |   |-- environment.prod.ts
|       |   |   `-- environment.ts
|       |   `-- main.ts
|       |-- tsconfig.app.json
|       |-- tsconfig.json
|       |-- tsconfig.spec.json
|       `-- webpack.config.ts
|-- assets
|   |-- NxConsole.png
|   `-- architecture.png
|-- deploy
|   |-- api
|   |   `-- Dockerfile #Dockerfile for API
|   |-- ...
|   `-- postgres 
|       `-- Dockerfile #Dockerfile for PGAdmin
|-- docker-compose-prod.yml
|-- docker-compose.yml
|-- generate.ts # Calls zen-generator.ts for each service
|-- jest.config.ts
|-- jest.preset.js
|-- libs
|   |-- ...
|   |-- paljs-generator-5.0.1.tgz #Custom modified local PalJS/Generator and related PalJS packages.
|   |-- paljs-plugins-5.0.1.tgz
|   |-- paljs-schema-5.0.1.tgz
|   |-- paljs-types-5.0.1.tgz
|   `-- prisma-clients #All your prisma clients. Your schema.prisma for each of your service is here.
|       |-- Auth #The base Prisma Client for the Auth / Identity service.
|       |   |-- index.ts
|       |   `-- prisma
|       |       |-- migrations
|       |       |   `-- ...
|       |       |-- schema.prisma
|       |       `-- seed.ts
|       `-- index.ts
|-- migrations.json
|-- nx.json
|-- package-lock.json
|-- package.json
|-- pgadmin # PGAdmin files. Nx Workspace generator modifies this when a new service is generated
|   |-- init.sh
|   |-- pgpass
|   `-- servers.json
|-- router-dev.yaml
|-- router-prod.yaml
|-- rover-cli-and-router-commands.txt #Helper txt file with commands for Apollo Managed Federation and Apollo Router
|-- subgraphs.json #JSON file that Nx Workspace Generator uses. DO NOT MODIFY OR DELETE!
|-- tools
|   |-- create-deploy-package.ts
|   |-- generators
|   |   |-- app-generator #Nx Workspace Generator code to generate subgraph API
|   |   |   |-- index.ts
|   |   |   |-- schema.json
|   |   |   `-- ... 
|   |   `-- prisma-generator #Prisma Client Generator code. The app-generator calls this.
|   |       |-- index.ts
|   |       |-- schema.json
|   |       `-- ... 
|   |-- misc.ts
|   |-- sdl-inputs.ts
|   |-- templates #Templates that zen-generator.ts uses
|   |   |-- index.ts
|   |   |-- nest-casl.ts
|   |   |-- nest-resolvers-abac.ts
|   |   |-- nest-resolvers-index.ts
|   |   |-- nest-resolvers-rbac.ts
|   |   |-- sdl-inputs.ts
|   |   `-- type-defs.ts
|   |-- tsconfig.tools.json
|   `-- zen-generator.ts #Calls and generates prisma-client and PalJS/Generator for a subgraph
|-- tsconfig.base.json
`-- tsconfig.compodoc.json
```

---

<a name="features_graphql"></a>
## 🥢 GraphQL Features

- [x] [Nest GraphQL](https://docs.nestjs.com/graphql/resolvers) resolvers as a gateway to [Prisma Client](https://www.prisma.io).
- [x] [Apollo GraphQL SDL bindings to Prisma](https://paljs.com/generator/sdl) generated via my modified fork of [Pal.js/Generator](https://github.com/johnkm516/prisma-tools-federation) Thank you [**@AhmedElywa**](https://github.com/paljs) 🎎
	- [x] Code-generate Apollo Federation 2 subgraphs that can compose a supergraph out of the box
	- [x] Code-generate GroupBy resolvers
	- [x] Code-generate transactional batch mutations where you can input a list of mutations and it will run them in order as a [Prisma transaction](https://www.prisma.io/docs/concepts/components/prisma-client/transactions "Prisma transaction")
	- [ ] (Coming soon) Code-generate raw SQL input resolvers


- [x] [PrismaSelect](https://paljs.com/plugins/select/) to solve the GraphQL N+1 problem for all queries for free.
- [x] Custom npm scripts to code generate the NestJS GraphQL types and resolvers on Prisma schema changes.
- [x] Custom Nx workspace generator to : 
	- [x] Code generate an entirely new backend service with its own Prisma Client and schema
	- [x] Generate docker-compose files to create a new PostgreSQL DB per service, and [PGAdmin](https://www.pgadmin.org/ "PGAdmin") configurations that automatically connect to these new databases 
	- [x] Generate helper package.json scripts anytime a new subgraph is generated

---

<a name="features_scaling"></a>
## 🍱 API Authentication, Performance & Scaling

- [x] Scalable architecture where you can code-generate new backend GraphQL subgraph service that composes into an Apollo Federation 2 supergraph in seconds with a *database per service*
- [x] [Nest authentication](https://docs.nestjs.com/techniques/authentication), user registration, and login resolvers.
- [x] [Nest guards & directives](https://github.com/ZenSoftware/zen/blob/base/apps/auth-api/src/app/auth) for both RBAC & ABAC authorization schemes.  ABAC is the default authorization scheme and is implemented with [@casl/prisma](https://casl.js.org/v6/en/package/casl-prisma).  

---

