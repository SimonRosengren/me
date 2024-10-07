---
title: 'Multiple Prisma clients'
description: 'How to handle Prisma client with more than one database'
keywords: 'prisma, mongodb, postgres, monorepo'
ttr: '10 min'
image:
  src: '/img/prism.jpg'
  alt: 'An image of two prisms.'
head:
  meta:
    - name: 'keywords'
      content: 'prisma, mongodb, postgres, monorepo'
    - name: 'robots'
      content: 'index, follow'
---

# Multiple Prisma clients

![Prisms](/img/prism.jpg)

In one of the projects I'm working on we're in the process of moving parts of our data from Neo4J to MongoDB. The ORM we're using is Prisma, and while there is quite a lot to talk about when it comes to Prismas support - or the lack thereof - for MongoDB it was actually something else that became my first real obstacle. How do you work with two Prisma clients?

Now, before I get into the nitty gritty of living with two Prisma clients I want to say that this perticular project is a Monorepo powered by TurboRepo. This might have made things more complicated than it needed to be, but hey! _Ce'st la vie_

We started out with something that I think most users of Prisma recognize. A single schema.prisma file for a Postgres database. It looked something like this: 

  ```ts [schema.prisma]{4-6,7} meta-info=val
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "postgresql"
      url      = "SOME_DATABASE_URL"
    }
    // ...
    // A bunch of models
  ```

I didn't want to start mixing my old and dusty Postgres-models with my new and shiny MongoDB-models, so naturally I decided to create a second .prisma file, ending up with mongo_schema.prisma and pg_schema.prisma. The datasource for the new schema is pretty straight forward, but its in the generator the magic happens.

  ```ts [mongo_schema.prisma]
    generator client {
      provider  = "prisma-client-js"
      output    = "./generated/mongo_client" // The magic
    }

    datasource db {
      provider = "mongodb"
      url      = "SOME_MONGO_DB_URL"
    }
  ```

Prisma lets you define an output for all the generated types etc that Prisma provides. This is how we can seperate the two clients. From now on, everytime that I run `npx prisma generate`, prisma will spit out all the mongoDB related stuff in `./generated/mongo_client`.

From here its just a matter of exporting your new mongo-client. For simplicity I decided to do it from a new file rather than the same as was being used for Postgres. Ending up with something like this

  ```ts [mongo_prisma.ts]
  export * from './generated/mongo_client'
  ```

And now I can import it using an alias

  ```ts [app.ts]
  import { PrismaClient } from 'prisma.ts';
  import { PrismaClient as MongoClient } from 'mongo_prisma.ts';

  const client = new PrismaClient(); // Our first client
  const mongoClient = new MongoClient(); // Our second client
  ```

I should probably do a similar pattern for the old client, naming it pg_client for consistency and what not but hopefully this will atleast set you on the right path if you're facing the same problems as we were. 