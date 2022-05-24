# Uma API REST simples para consumo de dados


## 📝 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [ESLint](https://eslint.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Sucrase](https://www.npmjs.com/package/sucrase)
- [Express](https://expressjs.com/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Mongoose](https://sequelize.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)


* Para subir o projeto no ar, copie o arquivo `.env_example` para `.env`.
* Perceba que as configurações começando com `process.env.` vem do arquivo `.env`.

## MongoDB atlas:

  Adicione sua url de conexão ao MongoDB.
  E em /src/db.js, descomente as opções para o mongodb atlas e comente as opções para o docker-compose.

  e execute os comandos abaixo na raiz do projeto:

  ```
  npm i
  npm run dev
  ```

  Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:5000/v1.


## Com Docker e Docker-compose :

  Com o docker e o docker-file ja instalados na sua máquina, execute o comando abaixo:

    ```
    docker-compose build && docker-compose up
    ```

  Para parar o container docker, execute o comando abaixo:

    ```
    docker-compose down
    ```

  Para verificar o console do seu docker compose, execute o comando abaixo:

    ```
    docker-compose logs
    ```
  Após o primeiro build da aplicação, para subir o container novamente, basta executar o comando abaixo:

    ```
    docker-compose up
    ```


  Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:5000/v1.




## As rotas da aplicação são:

### post -> '/sessions':
  Aonde será criada a seção para autenticação de usuário, e será requerido o email e o password correto do usuário no body da requisição, e o token gerado atrav´s dos headers da requisição.
  - StatusCodes:

    401: email ou senha inválidos.

    200: sucesso.

### post -> '/users':
  Aonde será criado o usuário, e será requerido o email e o password usuário no body da requisição.
  - StatusCodes:

    400: email já cadastrado.

    201: sucesso/cadastrado.

    500: erro interno.

### get -> '/users/:user_id/clients':
  Aonde será exibido todos os clientes cadastrados na base de dados.
  - Private route.
  - StatusCodes:

    404: usuário inexistente.

    200: sucesso.

    500: erro interno.

### get -> '/users/:user_id/clients/:id':
  Aonde será exibido por id, o cliente cadastrado na base de dados.
  - Private route
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso.

    500: erro interno.

### post -> '/users/:user_id/clients':
  Aonde será criado os clientes.
  - Private route
  - StatusCodes:

    404: usuário inexistente.

    402: cliente ja existente

    201: sucesso/cadastrado.

    500: erro interno.

### put -> '/users/:user_id/clients/:id':
  Aonde o cliente será editado por id.
  - Private route
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso/ atualizado.

    500: erro interno.

### delete -> '/users/:user_id/clients/:id':
  Aonde o cliente será deletado por id.
  - Private route
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso/ atualizado.

    500: erro interno.

