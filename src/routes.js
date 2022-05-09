import { Router } from 'express';

import SessionsContoller from './controllers/sessionsController';
import UsersController from './controllers/UsersContoller';
import ClientsContoller from './controllers/ClientsContoller';

import auth from './middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionsContoller.create);
routes.post('/users', UsersController.create);

routes.use(auth);

//  users routes
routes.get('/users', UsersController.index);
// routes.get('/users/:id', UsersController.show);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

// clients routes
routes.get('/users/:user_id/clients', ClientsContoller.index);
routes.get('/users/:user_id/clients/:id', ClientsContoller.show);
routes.post('/users/:user_id/clients', ClientsContoller.create);
routes.put('/users/:user_id/clients/:id', ClientsContoller.update);
routes.delete('/users/:user_id/clients/:id', ClientsContoller.destroy);

export default routes;
