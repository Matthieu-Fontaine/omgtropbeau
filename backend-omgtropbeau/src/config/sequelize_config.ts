import dotenv from 'dotenv';
dotenv.config();

if (!process.env.SEQUELIZE_DIALECT
  && !process.env.SEQUELIZE_HOST
  && !process.env.SEQUELIZE_PORT
  && !process.env.SEQUELIZE_USERNAME
  && !process.env.SEQUELIZE_PASSWORD
  && !process.env.SEQUELIZE_DATABASE) {
  process.exit(1);
}

const SEQUELIZE_PORT = parseInt(process.env.SEQUELIZE_PORT as string);
const SEQUELIZE_DIALECT = process.env.SEQUELIZE_DIALECT as string;
const SEQUELIZE_HOST = process.env.SEQUELIZE_HOST as string;
const SEQUELIZE_USERNAME = process.env.SEQUELIZE_USERNAME as string;
const SEQUELIZE_PASSWORD = process.env.SEQUELIZE_PASSWORD as string;
const SEQUELIZE_DATABASE = process.env.SEQUELIZE_DATABASE as string;

export {
  SEQUELIZE_DIALECT,
  SEQUELIZE_HOST,
  SEQUELIZE_PORT,
  SEQUELIZE_USERNAME,
  SEQUELIZE_PASSWORD,
  SEQUELIZE_DATABASE,
};