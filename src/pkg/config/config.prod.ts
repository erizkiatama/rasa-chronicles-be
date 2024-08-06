import { registerAs } from '@nestjs/config';

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
  url: process.env.DATABASE_URL,
}));

const adminConfig = registerAs('admin', () => ({
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
}));

export const prodConfigs = [appConfig, dbConfig, adminConfig];
