import App from './app';
import 'dotenv/config';

const { APP_PORT } = process.env;

App.listen(APP_PORT, () => {
  console.log(`Servidor executando na porta: ${APP_PORT}`);
  console.log(`http://localhost:${APP_PORT}`);
});
