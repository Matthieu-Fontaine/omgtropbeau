import dotenv from 'dotenv';
dotenv.config();

if (!process.env.JWTSECRETKEY) {
  process.exit(1);
}

const JWTSECRETKEY = process.env.JWTSECRETKEY;

export {
  JWTSECRETKEY
};