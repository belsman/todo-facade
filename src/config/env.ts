import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
};
