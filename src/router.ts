import { Router } from 'express';
import { TraineeRouter } from './conrollers/trainee';
import {userrouter } from './conrollers/user/index';
const mainRouter = Router();
mainRouter.use('/trainee', TraineeRouter);

export default mainRouter;