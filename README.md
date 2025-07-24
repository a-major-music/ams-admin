# AMM Services

## Introduction

This monorepo contains the services required for A Major Music, to fill in the gap between Shopify, which provides the till and the website, and Xero, which is the accounting backend. This system has been built in light of the sunsetting of TradeGecko, which was the inventory management system.

This monorepo is divided into these main elements:

- _Inventory_ - backend services for product and product variant management
- _Purchasing_ - backend services for purchase orders, receiving stock and supplier management
- _Admin_ - a single web interface for accessing the above
- _Tools_ - a set of import utilities, designed to work with legacy CSV exports

## Getting Started

### TL;DR

Get Postgres started. A docker image is available for this if so desired:

`cd docker-compose && docker-compose up -- postgres`

You will need to create the three databases: inventory, purchasing and common:

`docker exec {id as obtained from docker ps} psql -U postgres`
`CREATE DATABASE inventory;`
`CREATE DATABASE purchasing;`
`CREATE DATABASE common;`

Then we can get the underlying services to point to this local postgres, build it and run it.

`cp apps/inventory/env.local apps/inventory/.env`
`cp apps/purchasing/env.local apps/purchasing/.env`
`cp packages/common/env.local packages/common/.env`
`yarn`
`lerna run clean`
`lerna run start`

### Details

The backend services make use of Prisma as an ORM, and so the client needs to be built using:

`yarn prisma clean`

in each of those apps. This will set up a new, clean DB and create the necessary client files. You can do all in one hit using

`lerna run clean`

at the top level.

The .env file in each package as a DATABASE_URL config which needs to point to your postgres, and the inventory, purchasing and common
databases need to be created before the services will run.

You can then start all services using lerna run start at the top level.

### Prisma Note

Prisma works by building a _PrismaClient_ specific to the project from the _prisma/schema.prisma_
file. This client is actually saved in _node_modules/.prisma_, and for this reason Prisma is excluded from
the normal "hoisting" mechanism, that pulls common modules up to the root level. This is done using:

`"workspaces": { "nohoist": [ "prisma", "prisma/**" ] }`

in the _package.json_ file for those services that use Prisma.

## Test Data

To import the sample data go into the tools folder and run

`yarn ips && yarn ipp && yarn ipo`

which will import suppliers, then products, then purchase orders from the sample-\* CSV files.

There are also staging versions of these, which will talk to the default staging server endpoints.
