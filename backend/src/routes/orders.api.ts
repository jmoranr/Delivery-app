import express, { Router } from 'express';
export const OrdersRouter: Router = express. Router();
import * as OrdersController from '../controllers/orders.api.controller';

OrdersRouter.get('/:startingDate/:endingDate', OrdersController.getOrderByDateRange);
