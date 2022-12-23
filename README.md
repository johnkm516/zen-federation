# ⛩ Zen-Federation ⛩

#### NestJS + Prisma + Apollo Federation 2 Microservices Starter Kit

---

**This repository is a standalone fork of https://github.com/ZenSoftware/zen.**

Table of contents
=================

<!--ts-->
   * [Introduction](#intro)
      * [Why this is a standalone fork](#intro_why)
	  * [Major changes and additions from the original Zen repository](#intro_changes)
   * [The Architecture](#architecture)
      * [Rationale](#rationale)
   * [Project Setup Instructions](#setup)
   * [Code-Generation Usage](#usage)
   * [Docker](#docker)
     * [Local](#local)
     * [Public](#public)
<!--te-->

<a name="intro"></a>
## ♟️ Introduction

<a name="intro_why"></a>
**Why this is a standalone fork **: 

I removed all frontend aspects of the original code. Rather than implementing a full-stack starter kit in a single monorepo, for my purposes I wanted separation of concerns between the backend and frontend as well as separate the entire stack into three layers. For an enterprise architecture, I expect multiple frontend applications, and as both the frontend and backend get bigger and more bloated with libraries, having everything in a single Nx monorepo with shared dependencies means the container image size will grow too large. This repository is the data model layer of the software architecture that I envision. Further details about the architecture and changes that I made from the original repository are below. 

Continuing the vision of the original Zen repository, this repository treats `schema.prisma` as a *single source of truth* for data models. From this single file (or in this case, a single *schema per service*), this project generates all the code necessary to start a GraphQL server in seconds by inputting just a few commands. The difference between the old repository and my fork is that not only can you generate CRUD for models declared in the `schema.prisma` file, you can generate an entire new backend service in seconds, which comes with its own Prisma client and `schema.prisma`, with a composable Apollo Federation 2 supergraph out of the box. 

<a name="intro_changes"></a>
**Major changes and additions from the original Zen repository** : 

- Nx workspace generator that generates an entire new service / apollo subgraph from scratch, which comes with its own Prisma Client and `schema.prisma` file. 

- Docker-compose which works without any modifications needed, with optimized multi-stage build Dockerfile to minimize container image size. The Nx workspace generator even generates the docker-compose file and modifies it when you generate a new backend service; you can specify the ports or the ports will be automatically assigned for you. The docker compose sets up the entire environment with Apollo Router, PGAdmin, PostgreSQL, and the subgraphs.

- PGAdmin that automatically connects to each service's PostgreSQL server; the Nx workspace generator automatically generates files for PGAdmin that connect to new databases automatically

- A separate fork of the Paljs/Generator library to generate gql schemas and endpoints to make it work with Apollo 2 Federation. Details about my modifications are below and you can find my fork here : https://github.com/johnkm516/prisma-tools-federation

Things I deleted from the original Zen repository : 

- GraphQL upload related code : I agree with [Apollo's recommendations](https://www.apollographql.com/blog/backend/file-uploads/file-upload-best-practices/ "Apollo's recommendations") that file uploads shouldn't be handled with GraphQL. Trying to implement multi-part file uploading in a federated architecture using Apollo Router not only might not be possible at the moment, it's outside the scope of this service layer. Refer to my intended architecture below. 

- Frontend related code. As mentioned above this monorepo serves as a data model layer for a greater architecture. Removing the frontend code also gives you the freedom to implement the stack however you want, not just in the way I envision. 

<a name="architecture"></a>
## 🏰 The Architecture 

![alt text](https://github.com/johnkm516/zen-federation/blob/base/assets/architecture.png?raw=true)

The architecture I envision are separated into three layers : 

1.  The data model layer ([Zen-Federation](https://github.com/johnkm516/zen-federation "Zen-Federation") YOU ARE HERE)
2. The business logic layer ([Zen-Temporal](https://github.com/johnkm516/zen-temporal "Zen-Temporal"))
3. Frontend layer (In whichever framework you choose, create a web app that uses Apollo Client and Temporal Client libraries to connect to layers 1 & 2)
4. External / Other services. You can use Temporal workflows to communicate with external / other APIs, and create / use services like an ECM solution for file uploading

<a name="rationale"></a>
**My rationale behind this architecture** : 

- GraphQL endpoints can become incredibly verbose and tedious to implement. I wanted to be able to automate generating all the CRUD endpoints for models defined in `schema.prisma` each subgraph, and generate new subgraphs with ease.

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
npm run build:dev
npm run prisma:migrate
```

```bash
# Start the Auth subgraph API
npm run start:auth
```
<a name="usage"></a>
## 🎴 Code-Generation Usage
**Recommended**

- [VSCode](https://code.visualstudio.com/ "VSCode") with Nx Console extension

<a name="scripts"></a>
**Package.json Scripts**



```bash
# Generate the Prisma Client for all subgraphs. 
# This script is automatically modified when a new subgraph is generated using the Nx Workspace generator.
npm run api:gen
```

```bash
# build 
npm run build:dev
npm run build:prod
```






---

## 🥢 GraphQL Features

- [x] [Nest GraphQL](https://docs.nestjs.com/graphql/resolvers) resolvers as a gateway to [Prisma Client](https://www.prisma.io).
- [x] [Apollo GraphQL SDL bindings to Prisma](https://paljs.com/generator/sdl) generated via my modified fork of [Pal.js/Generator](https://github.com/johnkm516/prisma-tools-federation) Thank you [**@AhmedElywa**](https://github.com/paljs) 🎎
	- [x] Code-generate Apollo Federation 2 subgraphs that can compose a supergraph out of the box
	- [x] Code-generate GroupBy resolvers
	- [ ] (Coming soon) Code-generate transactional batch mutations where you can input a list of mutations and it will run them in order as a [Prisma transaction](https://www.prisma.io/docs/concepts/components/prisma-client/transactions "Prisma transaction")
- [x] [PrismaSelect](https://paljs.com/plugins/select/) to solve the GraphQL N+1 problem for all queries for free.
- [x] Custom npm scripts to code generate the NestJS GraphQL types and resolvers on Prisma schema changes.
- [x] Custom Nx workspace generator to : 
	- [x] Code generate an entirely new backend service with its own Prisma Client and schema
	- [x] Generate docker-compose files to create a new PostgreSQL DB per service, and [PGAdmin](https://www.pgadmin.org/ "PGAdmin") configurations that automatically connect to these new databases 
	- [x] Generate helper package.json scripts anytime a new subgraph is generated

---
## 🍱 API Authentication, Performance & Scaling

- [x] Scalable architecture where you can code-generate new backend GraphQL subgraph service that composes into an Apollo Federation 2 supergraph in seconds with a *database per service*
- [x] [Nest authentication](https://docs.nestjs.com/techniques/authentication), user registration, and login resolvers.
- [x] [Nest guards & directives](https://github.com/ZenSoftware/zen/blob/base/apps/auth-api/src/app/auth) for both RBAC & ABAC authorization schemes.  ABAC is the default authorization scheme and is implemented with [@casl/prisma](https://casl.js.org/v6/en/package/casl-prisma).  

---

