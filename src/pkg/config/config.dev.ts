import { registerAs } from '@nestjs/config';

const appConfig = registerAs('app', () => ({
  env: 'development',
  name: 'rasa-chronicles-be',
  port: 8000,
}));

const dbConfig = registerAs('db', () => ({
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'rasa-chronicles',
}));

const adminConfig = registerAs('admin', () => ({
  username: 'admin',
  password: 'admin',
}));

export const devConfigs = [appConfig, dbConfig, adminConfig];
