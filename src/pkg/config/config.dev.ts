import { registerAs } from '@nestjs/config';

const appConfig = registerAs('app', () => ({
  env: 'development',
  name: 'rasa-chronicles-be',
  port: 8000,
  jwt: {
    secret: 'l46zkflLofyZlDvcyAly5cWQeQ82kMRM',
    expiryTime: '1d',
  },
}));

const dbConfig = registerAs('db', () => ({
  url: 'postgresql://postgres:postgres@localhost:5432/rasa-chronicles?schema=public',
}));

const adminConfig = registerAs('admin', () => ({
  username: 'admin',
  password: 'admin',
}));

export const devConfigs = [appConfig, dbConfig, adminConfig];
