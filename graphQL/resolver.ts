import { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    links: async (parent, args, context) => await context.prisma.link.findMany()
  }
}