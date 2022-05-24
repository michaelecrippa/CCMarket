import { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT } from '@config';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: DATABASE_NAME,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  models: [__dirname + '/models'],
});
