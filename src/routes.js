import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.json({Hello: world})
});

export default routes;