import App from './app';

require('dotenv');

const port = process.env.SERVER_PORT;

App.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
  console.log(`http://localhost:${port}`);
});
