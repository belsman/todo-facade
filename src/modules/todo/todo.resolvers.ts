export const todoResolvers = {
  Query: {
    todos: async () => {
      return [{ id: '1', title: 'Graphql facade', completed: false }];
    },
  },
};
