import { Sequelize } from 'sequelize';
import {
  SEQUELIZE_DIALECT,
  SEQUELIZE_HOST,
  SEQUELIZE_PORT,
  SEQUELIZE_USERNAME,
  SEQUELIZE_PASSWORD,
  SEQUELIZE_DATABASE
} from './sequelize_config';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: SEQUELIZE_HOST,
  port: SEQUELIZE_PORT,
  username: SEQUELIZE_USERNAME,
  password: SEQUELIZE_PASSWORD,
  database: SEQUELIZE_DATABASE,
});

export default sequelize;
