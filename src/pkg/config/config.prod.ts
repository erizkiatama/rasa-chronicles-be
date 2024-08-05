import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

const appConfig = registerAs('app', () => ({
  env: 'production',
  name: 'rasa-chronicles-be',
  port: 8000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiryTime: process.env.JWT_EXPIRY_TIME,
  },
}));

const dbConfig = registerAs('db', () => ({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'rasa-chronicles',
}));

const adminConfig = registerAs('admin', () => ({
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
}));

export const prodConfigs = [appConfig, dbConfig, adminConfig];
