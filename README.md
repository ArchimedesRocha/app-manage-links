## Disclaimer

This project has two branch's

First is the main branch, is this branch the application is configured to run in local and only have the API Rest.

Second to run in local too, but contain apollo client and apollo server

The DB is confired with Postgress, maybe you need change the configuration to connect in yout database.

Following the tutorial in https://archimedesrocha.com.br/manage-links-next-prisma-and-graphql/#5%20-%20Conectando%20o%20DB%20ao%20Prisma

## Getting Started - Only in local with archives the branch main

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000] with your browser to see the result.

Open [http://localhost:3000/api/graphql] with your browser to see the result.