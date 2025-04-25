import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { todoTypeDefs } from '../modules/todo/todo.typeDefs';
import { todoResolvers } from '../modules/todo/todo.resolvers';

// Schema Stitching
const typeDefs = mergeTypeDefs([todoTypeDefs]);
const resolvers = mergeResolvers([todoResolvers]);

export { typeDefs, resolvers };
