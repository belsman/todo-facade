import { client } from '../../services/grpc-client';

export const todoResolvers = {
  Query: {
    todos: async () => {
      return new Promise((resolve, reject) => {
        client.listTodos({}, (err, response) => {
          if (err) return reject(err);
          resolve(
            response.todos.map((todo) => ({
              id: todo.id,
              title: todo.title,
              completed: todo.completed,
            }))
          );
        });
      });
    },
  },
};
