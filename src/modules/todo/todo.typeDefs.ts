import { gql } from 'apollo-server';

export const todoTypeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean
  }

  type Query {
    todos: [Todo!]!
  }
`;
