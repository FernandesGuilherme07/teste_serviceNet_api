# Uma API REST simples para consumo de dados
- MongoDB atlas:

  Para subir o projeto no ar, copie o arquivo `.env_example` para `.env` e adicione sua url de conexão ao MongoDB.

- Docker-compose e Makefiles:

  Com o docker e o make ja instalados na sua máquina, execute o comando abaixo:

    ```
    make up
    ```

  Para parar o container docker, execute o comando abaixo:

    ```
    make down
    ```

  Para verificar o console do seu docker compose, execute o comando abaixo:

    ```
    make logs
    ```

Execute os comandos abaixo:

```
npm i
npm run dev
```

Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:3001/.



Perceba que as configurações começando com `process.env.` vem do arquivo `.env`.

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

    500: erro interno

### get ->'/users/:user_id/clients':
  Aonde será exibido os clientes cadastrados na base de dados.
  - StatusCodes:

    404: usuário inexistente.

    200: sucesso.

    500: erro interno

### get ->'/users/:user_id/clients/:id':
  Aonde será exibido por id o cliente cadastrado na base de dados.
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso.

    500: erro interno

### post ->'/users/:user_id/clients':
  Aonde será criado os clientes.
  - StatusCodes:

    404: usuário inexistente.

    402: cliente ja existente

    201: sucesso/cadastrado.

    500: erro interno

### put ->'/users/:user_id/clients/:id':
  Aonde o cliente será editado por id.
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso/ atualizado.

    500: erro interno

### delete ->'/users/:user_id/clients/:id':
  Aonde o cliente será deletado por id.
  - StatusCodes:

    404: usuário inexistente/ cliente inexistente.

    200: sucesso/ atualizado.

    500: erro interno

