import express from 'express';
import sequelize from './config/sequelize'

const app = express();

app.use(express.json());

import userRouter from './routes/user.routes';

const PORT = process.env.PORT || '3003';
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
