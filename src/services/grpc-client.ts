import { TodoServiceClient } from '../generated/todo';
import { credentials } from '@grpc/grpc-js';

export const client = new TodoServiceClient(
  `localhost:50051`,
  credentials.createInsecure()
);
