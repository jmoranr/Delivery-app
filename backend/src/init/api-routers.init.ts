import { Application } from 'express-ws';
import { MiddlewareRouter } from '../routes/middleware.api';
import { OrdersRouter } from '../routes/orders.api';

export function initApiRouters (app: Application): void {

app.use('/api/orders', MiddlewareRouter, OrdersRouter);

}
