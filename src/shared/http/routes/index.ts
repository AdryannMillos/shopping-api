import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello , i am online' });
});

export default routes;
