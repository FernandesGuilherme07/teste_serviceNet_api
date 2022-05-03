import { Router } from 'express';

import UsersController from './controllers/UsersContoller';

import SessionsContoller from './controllers/sessionsController';

import auth from './middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionsContoller.create);

routes.use(auth);

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

export default routes;
