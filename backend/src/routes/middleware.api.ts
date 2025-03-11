import express from 'express';
export const MiddlewareRouter = express. Router();
import * as MiddlewareApiController from '../controllers/middleware.api.controller';

MiddlewareRouter.use(MiddlewareApiController.main);
