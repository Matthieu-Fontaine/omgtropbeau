// config/sequelize.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost', // ou l'adresse de votre serveur PostgreSQL
  port: 5432, // port par défaut de PostgreSQL
  username: 'matthieu',
  password: '55D7TCYm3MJaS2L9',
  database: 'omgtropbeau',
});

export default sequelize;
