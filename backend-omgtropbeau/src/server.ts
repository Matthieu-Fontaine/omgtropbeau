import app from './app';
import { SERVER_PORT } from './config/server_config';

app.listen(SERVER_PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${SERVER_PORT}`);
});