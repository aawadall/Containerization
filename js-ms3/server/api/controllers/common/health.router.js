import * as express from 'express';
import healthController from './health.controller';

export default express
  .Router()
  .get('/health', healthController.all)
  .get('/health/:id', healthController.byService);
