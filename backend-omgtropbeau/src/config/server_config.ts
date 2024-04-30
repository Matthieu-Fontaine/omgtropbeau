import dotenv from 'dotenv';
dotenv.config();

if (!process.env.SERVER_PORT) {
  process.exit(1);
}

const SERVER_PORT = parseInt(process.env.SERVER_PORT as string);

export {
  SERVER_PORT
};