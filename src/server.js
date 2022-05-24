import App from './app';

const port = 5000;

App.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
  console.log(`http://localhost:${port}`);
});
