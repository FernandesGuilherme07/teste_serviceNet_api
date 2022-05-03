import express from 'express';
import cors from 'cors';

// routes Aplication
import routes from './routes';

// connection mongoose of mongodb
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use('/v1', routes);
  }
}

export default new App().server;
