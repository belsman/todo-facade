import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { config } from './config/env';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';

import { logger } from './utils/logger';

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
      config.isDev
        ? ApolloServerPluginLandingPageLocalDefault()
        : ApolloServerPluginLandingPageDisabled(),
    ],
    context: ({ req }) => {
      // attach auth token, etc.
      logger.info({ headers: req.headers }, 'Incoming request');
      return { user: null };
    },
    // cache: 'bounded',
    persistedQueries: false,
  });

  const { url } = await server.listen({ port: config.port });

  logger.info(`🚀 Server ready at  ${url}`);
}

startServer();
